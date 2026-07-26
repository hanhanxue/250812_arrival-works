// One-time migration: reads every [project]/index.mdx in the R2 bucket and
// emits scripts/out/{works,media,tags}.csv for import into the Google Sheet.
//
// Usage:  cd apps/research && set -a && . ./.env.local && set +a \
//         && node scripts/export-sheet-csv.mjs

import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import matter from "gray-matter";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const bucket = process.env.R2_BUCKET_NAME;

const csvCell = (v) => {
  const s = v == null ? "" : String(v).trim();
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = (rows) => rows.map((r) => r.map(csvCell).join(",")).join("\n") + "\n";

const listing = await r2.send(new ListObjectsV2Command({ Bucket: bucket }));
const mdxKeys = (listing.Contents ?? [])
  .map((o) => o.Key)
  .filter((k) => k.endsWith("/index.mdx"))
  .sort();

const workRows = [];
const mediaRows = [];
const tagOrder = [];

for (const key of mdxKeys) {
  const slug = key.replace("/index.mdx", "");
  const obj = await r2.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
  const { data } = matter(await obj.Body.transformToString());

  const date =
    data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  const tags = (data.tags ?? []).map((t) => String(t).trim()).filter(Boolean);
  for (const t of tags) if (!tagOrder.includes(t)) tagOrder.push(t);

  workRows.push([
    slug,
    data.publish === true ? "TRUE" : "FALSE",
    date,
    data.title,
    data.subtitle,
    data.description,
    tags.join(", "),
    data.aspectRatio,
    data.wide === true ? "TRUE" : "FALSE",
    "", // folder: blank = same as slug
    data.zipFile,
    data.notes,
    data.youtubeUrl,
    data.siteUrl,
  ]);

  (data.media ?? []).forEach((m, i) => {
    mediaRows.push([slug, i + 1, m.src, m.muxId, m.alt, m.caption]);
  });
}

// newest project first, same as the site
workRows.sort((a, b) => String(b[2]).localeCompare(String(a[2])));

const out = join(dirname(fileURLToPath(import.meta.url)), "out");
mkdirSync(out, { recursive: true });

writeFileSync(
  join(out, "works.csv"),
  csv([
    ["slug", "publish", "date", "title", "subtitle", "description", "tags", "aspect", "wide", "folder", "zipFile", "notes", "youtubeUrl", "siteUrl"],
    ...workRows,
  ])
);
writeFileSync(
  join(out, "media.csv"),
  csv([["slug", "order", "src", "muxId", "alt", "caption"], ...mediaRows])
);
writeFileSync(join(out, "tags.csv"), csv([["tag"], ...tagOrder.map((t) => [t])]));

console.log(`works: ${workRows.length} rows, media: ${mediaRows.length} rows, tags: ${tagOrder.length}`);
console.log(`written to ${out}`);
