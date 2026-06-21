import { ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import matter from "gray-matter";
import { r2 } from "./r2";

// Add this type
export type MediaItem = {
  url: string;
  type: "image" | "video";
  alt?: string;
  caption?: string;
};

export type Work = {
  publish: boolean;
  date: string;

  slug: string;
  title: string;
  subtitle?: string;
  description?: string;

  tags: string[];

  aspectRatio: number;
  media: MediaItem[];        // full public URLs
  
  zipUrl?: string;
  zipSize?: number;           // bytes, inferred from listing
  notes?: string;
  youtubeUrl?: string;
  siteUrl?: string;
};

const VIDEO_EXTS = [".mp4", ".webm", ".mov"];

export async function getWorks(): Promise<Work[]> {
  const bucket = process.env.R2_BUCKET_NAME!;
  const publicUrl = process.env.R2_PUBLIC_URL!;

  // 1. List everything in the bucket once
  const listing = await r2.send(new ListObjectsV2Command({ Bucket: bucket }));
  const objects = listing.Contents ?? [];

  // 2. Find all index.mdx files → one per project
  const mdxKeys = objects
    .map((o) => o.Key!)
    .filter((k) => k.endsWith("/index.mdx"));

  const works = await Promise.all(
    mdxKeys.map(async (key) => {
      const slug = key.replace("/index.mdx", "");

      // 3. Fetch and parse frontmatter
      const obj = await r2.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
      const text = await obj.Body!.transformToString();
      const { data } = matter(text);

      if (!data.publish) return null;

      // 4. Infer zip size from the listing — no extra request
      const zipKey = data.zipFile ? `${slug}/${data.zipFile}` : undefined;
      const zipEntry = zipKey ? objects.find((o) => o.Key === zipKey) : undefined;









      return {
        publish: data.publish,
        date: data.date instanceof Date
  ? data.date.toISOString().slice(0, 10)
  : String(data.date),

        slug,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,

        tags: data.tags ?? [],

        aspectRatio: data.aspectRatio ?? 1,
        media: ((data.media ?? []) as { src: string; alt?: string; caption?: string }[]).map((item) => ({
          url: `${publicUrl}/${slug}/${item.src}`,
          type: VIDEO_EXTS.some((ext) => item.src.endsWith(ext)) ? "video" : "image" as const,
          alt: item.alt,
          caption: item.caption,
        })),

        zipUrl: zipKey ? `${publicUrl}/${zipKey}` : undefined,
        zipSize: zipEntry?.Size,           // bytes from ListObjectsV2, free
        notes: data.notes || undefined,
        youtubeUrl: data.youtubeUrl || undefined,
        siteUrl: data.siteUrl || undefined,
      } satisfies Work;
    })
  );

  return works
    .filter(Boolean)
    .sort((a, b) => b!.date.localeCompare(a!.date)) as Work[];
}