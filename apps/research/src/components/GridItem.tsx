import styles from "./GridItem.module.scss";
import Image from "next/image";
import XLink from "./XLink";
import { Work } from "@/lib/works";

function formatBytes(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function GridItem({
  columnWidth,
  work,
  index,
}: {
  columnWidth: number;
  work: Work;
  index: number;
}) {
  const cover = work.media[0];

  return (
    <div
      className={styles.gridItem}
      data-masonry-item
      key={index}
      style={{ width: `${columnWidth}px` }}
    >
      <div
        className={styles.imageContainer}
        style={{ aspectRatio: work.aspectRatio }}
      >
        {cover && (
          cover.type === "video" ? (
            <video
              src={cover.url}
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              preload="auto"
            />
          ) : (
            <Image src={cover.url} fill={true} alt="" />
          )
        )}
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoContainerLeft}>
          <div className={styles.title}>
            {work.title}
            <span className={styles.year}>{work.date.slice(0, 4)}</span>
          </div>
          <div className={styles.tags}>{work.tags.join(", ")}</div>
          <div className={styles.links}>
            <ul>
              {work.zipUrl && (
                <li>
                  <XLink href={work.zipUrl} target="_blank" rel="noopener">
                    ↓ Source Files{work.zipSize ? ` (${formatBytes(work.zipSize)})` : ""}
                  </XLink>
                </li>
              )}
              {work.youtubeUrl && (
                <li>
                  <XLink href={work.youtubeUrl} target="_blank" rel="noopener">
                    ↗ Tutorial
                  </XLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
