"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import XLink from "../global/XLink";
import { Work } from "@/lib/works";
import styles from "./GridItemA.module.scss";

import ICO_Download from "../iconography/ICO_Download";
import ICO_Play from "../iconography/ICO_Play";
import ICO_View from "../iconography/ICO_View";
import ICO_More from "../iconography/ICO_More";

import ICO_ArrowLeft from "../iconography/ICO_ArrowLeft";
import ICO_ArrowRight from "../iconography/ICO_ArrowRight";

import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";

function formatBytes(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function GridItemA({
  columnWidth,
  work,
  index,
}: {
  columnWidth: number;
  work: Work;
  index: number;
}) {


  const tileRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const [inView, setInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselMounted, setCarouselMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 });

  
  const {
    prevButtonDisabled,
    nextButtonDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi) // placeholder, will set emblaApi after carousel init

  // When tile enters viewport, lazy-mount the rest of the carousel
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (tileRef.current) observer.observe(tileRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && !carouselMounted) setCarouselMounted(true);
  }, [inView, carouselMounted]);

  // Only play the active video when tile is in viewport
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (inView && i === activeIndex) video.play().catch(() => {});
      else video.pause();
    });
  }, [inView, activeIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => setActiveIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  const setVideoRef = useCallback((el: HTMLVideoElement | null, i: number) => {
    if (el) videoRefs.current.set(i, el);
    else videoRefs.current.delete(i);
  }, []);

  return (
    <div
      ref={tileRef}
      className={styles.gridItem}
      data-masonry-item
      style={{ width: `${columnWidth}px` }}
      key={index}
    >
      <div
        className={styles.imageContainer}
        style={{ aspectRatio: work.aspectRatio }}
      >

        
        {work.media.length > 1 && (
          <div className={styles.carouselControls}>
            <button className={styles.arrowButton} 
            onClick={onPrevButtonClick}
            disabled={prevButtonDisabled}
            >
              <ICO_ArrowLeft className={styles.arrowButtonIcon} />
            </button>

            <button className={styles.arrowButton} 
            onClick={onNextButtonClick}
            disabled={nextButtonDisabled}
            >
              <ICO_ArrowRight className={styles.arrowButtonIcon} />
            </button>
          </div>
        )}

        

        <div className={styles.carousel} ref={emblaRef}>
          <div className={styles.carouselTrack}>
            {work.media.map((item, i) => (
              <div key={i} className={styles.carouselSlide}>
                {/* cover always renders; slides 1–N render after tile enters viewport */}
                {(i === 0 || carouselMounted) &&
                  (item.type === "video" ? (
                    <video
                      ref={(el) => setVideoRef(el, i)}
                      src={item.url}
                      loop
                      muted
                      playsInline
                      preload="none" // ← no network hit until controlled by IntersectionObserver
                    />
                  ) : (
                    <Image
                      src={item.url}
                      fill
                      alt=""
                      sizes={`${columnWidth}px`}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {work.media.length > 1 && (
        <div className={styles.dots}>
          {work.media.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}










      <div className={styles.infoContainer}>
        <div className={styles.infoContainerLeft}>
          <div className={styles.title}>
            {work.title}
            <span className={styles.year}>{work.date.slice(0, 4)}</span>
          </div>
          <div className={styles.tags}>{work.tags.join(", ")}</div>
          <div>
            <ul className={styles.links}>

                            {work.zipUrl && (
                <li>
                  <XLink href={work.zipUrl} target="_blank" rel="noopener">
                    <span className={styles.linkBlock}>
                      {/* <ICO_Download /> */}
                      <span>→</span> Source Files
                      {work.zipSize ? ` (${formatBytes(work.zipSize)})` : ""}
                    </span>
                  </XLink>
                </li>
              )}


              {work.zipUrl && (
              <li>
                <XLink href="" target="_blank" rel="noopener">
                  <span className={styles.linkBlock}>
                    {/* <ICO_More /> */}
                    <span>→</span> Details
                  </span>
                </XLink>
              </li>
              )}


              {work.youtubeUrl && (
                <li>
                  <XLink href={work.youtubeUrl} target="_blank" rel="noopener">
                    <span className={styles.linkBlock}>
                      {/* <ICO_Play /> */}
                      <span>→</span> Tutorial
                    </span>
                  </XLink>
                </li>
              )}
              {work.zipUrl && (
              <li>
                <XLink href="" target="_blank" rel="noopener">
                  <span className={styles.linkBlock}>
                    {/* <ICO_View /> */}
                    <span>→</span> View Project
                  </span>
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
