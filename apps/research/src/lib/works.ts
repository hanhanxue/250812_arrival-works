import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { cacheLife, cacheTag } from "next/cache";
import { r2 } from "./r2";
import { fetchSheet } from "./sheet";

export type MediaItem = {
  url: string;
  type: "image" | "video";
  muxId?: string;              // Mux playback ID; when set, videos stream via Mux instead of R2
  alt?: string;
  caption?: string;
};

export type Work = {
  publish: boolean;
  date: string;               // ISO yyyy-mm-dd, derived from the slug's YYMMDD prefix

  slug: string;
  title: string;
  subtitle?: string;
  description?: string;

  tags: string[];

  aspect: number;
  media: MediaItem[];        // full public URLs
  wide?: boolean;             // spans 2 grid columns when true


  zipUrl?: string;
  zipSize?: number;           // bytes, inferred from listing
  notes?: string;
  youtubeUrl?: string;
  siteUrl?: string;
};

const VIDEO_EXTS = [".mp4", ".webm", ".mov"];

const isTrue = (v: string | undefined) => v?.toUpperCase() === "TRUE";

// Slugs are prefixed with the work's date as YYMMDD (e.g. "250812_arrival-works");
// there is no date column in the sheet — the prefix is the single source of truth.
function dateFromSlug(slug: string): string {
  const m = /^(\d{2})(\d{2})(\d{2})/.exec(slug);
  if (!m) {
    throw new Error(`works sheet: slug "${slug}" must start with a YYMMDD date prefix`);
  }
  const [, yy, mm, dd] = m;
  const iso = `20${yy}-${mm}-${dd}`;
  // Round-trip through Date to reject impossible dates like month 13 or Feb 30.
  const parsed = new Date(`${iso}T00:00:00Z`);
  if (isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== iso) {
    throw new Error(`works sheet: slug "${slug}" has an impossible date prefix "${m[0]}"`);
  }
  return iso;
}

export async function getWorks(): Promise<Work[]> {
  "use cache";
  cacheLife("days");
  cacheTag("works");

  const bucket = process.env.R2_BUCKET_NAME!;
  const publicUrl = process.env.R2_PUBLIC_URL!;

  // Metadata comes from the Google Sheet; R2 is listed only to infer zip sizes.
  const [workRows, mediaRows, tagRows, listing] = await Promise.all([
    fetchSheet("works", ["slug", "publish", "title", "tags", "aspect"]),
    fetchSheet("media", ["slug", "src", "muxId"]),
    fetchSheet("tags", ["tag"]),
    r2.send(new ListObjectsV2Command({ Bucket: bucket })),
  ]);

  const objects = listing.Contents ?? [];
  const allowedTags = new Set(tagRows.map((r) => r.tag).filter(Boolean));

  const mediaBySlug = new Map<string, Record<string, string>[]>();
  for (const m of mediaRows) {
    if (!m.slug) continue;
    const list = mediaBySlug.get(m.slug) ?? [];
    list.push(m);
    mediaBySlug.set(m.slug, list);
  }

  const works = workRows
    .filter((row) => isTrue(row.publish))
    .map((row) => {
      const { slug } = row;
      const folder = row.folder || slug;   // blank folder = files live under the slug

      const tags = row.tags ? row.tags.split(",").map((t) => t.trim()).filter(Boolean) : [];
      const unknown = tags.filter((t) => !allowedTags.has(t));
      if (unknown.length) {
        throw new Error(
          `works sheet: "${slug}" uses tag(s) not in the tags tab: ${unknown.join(", ")}`
        );
      }

      // media order = row order in the sheet, top first
      const media: MediaItem[] = (mediaBySlug.get(slug) ?? [])
        .map((m) => ({
          url: m.src ? `${publicUrl}/${folder}/${m.src}` : "",
          type: m.muxId || VIDEO_EXTS.some((ext) => m.src.endsWith(ext)) ? "video" : "image",
          muxId: m.muxId || undefined,
          alt: m.alt || undefined,
          caption: m.caption || undefined,
        }));

      const zipKey = row.zipFile ? `${folder}/${row.zipFile}` : undefined;
      const zipEntry = zipKey ? objects.find((o) => o.Key === zipKey) : undefined;

      return {
        publish: true,
        date: dateFromSlug(slug),

        slug,
        title: row.title,
        subtitle: row.subtitle || undefined,
        description: row.description || undefined,

        tags,

        aspect: Number(row.aspect) || 1,
        wide: isTrue(row.wide),
        media,

        zipUrl: zipKey ? `${publicUrl}/${zipKey}` : undefined,
        zipSize: zipEntry?.Size,           // bytes from ListObjectsV2, free
        notes: row.notes || undefined,
        youtubeUrl: row.youtubeUrl || undefined,
        siteUrl: row.siteUrl || undefined,
      } satisfies Work;
    });

  return works.sort((a, b) => b.date.localeCompare(a.date));
}
