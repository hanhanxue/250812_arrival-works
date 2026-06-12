import styles from "./GridItem.module.scss";
import { WorkItem } from "./SMainGridA";
// import UIButton from "./UIButton";
import Image from "next/image";


import XLink from "./XLink";

export default function GridItem({
  columnWidth,
  work,
  index,
}: {
  columnWidth: number;
  work: WorkItem;
  index: number;
}) {
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
        {!work.hidden &&
          (work.video ? (
            <video
              src={work.videoSrc}
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              preload="auto"
            />
          ) : (
            <Image src={work.src} fill={true} alt="" />
          ))}

        {/* <div className={styles.overlaysContainer}>
          <div className={styles.overlayBackground}></div>

          <div className={styles.overlayContent}>
            <div className={styles.overlayContentBottom}>
              <UIButton>Project Files</UIButton>
            </div>
          </div>
        </div> */}

      </div>





      <div className={styles.infoContainer}>

        <div className={styles.infoContainerLeft}>
          <div className={styles.title}>{work.title} 
            <span className={styles.year}>2026</span>
          </div>
          <div className={`${styles.tags}
          `}>{work.tags.join(", ")}</div>
                    <div className={`${styles.links}
          `}><ul>
              <li>
                                                      <XLink
                                    href="https://www.hanhanxue.com/"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                   ↓ Source Files (39.32 MB) 
                                  </XLink></li>
              
                            {/* <li><XLink
                                    href="https://www.hanhanxue.com/"
                                    target="_blank"
                                    rel="noopener"
                                  >
                                   ↓ Tutorial
                                  </XLink></li> */}
            </ul>
          </div>
        </div>
        
        

        {/* <div className={styles.infoContainerRight}>
          <div className={styles.index}>2026</div>
        </div> */}

      </div>





    </div>
  );
}
