import styles from "./GridItem.module.scss";
import Image from "next/image";
import XLink from "../global/XLink";
import { Work } from "@/lib/works";
import ICO_Download from "../iconography/ICO_Download";
import ICO_Play from "../iconography/ICO_Play";
import ICO_View from "../iconography/ICO_View";
import ICO_More from "../iconography/ICO_More";

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
        {cover &&
          (cover.type === "video" ? (
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
          ))}
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoContainerLeft}>
          <div className={styles.title}>
            {work.title}
            <span className={styles.year}>{work.date.slice(0, 4)}</span>
          </div>
          <div className={styles.tags}>{work.tags.join(", ")}</div>
          <div>
            <ul className={styles.links}>
              <li>
                <XLink href="" target="_blank" rel="noopener">
                  <span className={styles.linkBlock}>
                    <ICO_More />
                    Details
                  </span>
                </XLink>
              </li>

              {work.zipUrl && (
                <li>
                  <XLink href={work.zipUrl} target="_blank" rel="noopener">
                    <span className={styles.linkBlock}>
                      <ICO_Download />
                      Source Files
                      {work.zipSize ? ` (${formatBytes(work.zipSize)})` : ""}
                    </span>
                  </XLink>
                </li>
              )}
              {work.youtubeUrl && (
                <li>
                  <XLink href={work.youtubeUrl} target="_blank" rel="noopener">
                    <span className={styles.linkBlock}>
                      <ICO_Play />
                      Tutorial
                    </span>
                  </XLink>
                </li>
              )}
              <li>
                <XLink href="" target="_blank" rel="noopener">
                  <span className={styles.linkBlock}>
                    <ICO_View />
                    View Project
                  </span>
                </XLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
