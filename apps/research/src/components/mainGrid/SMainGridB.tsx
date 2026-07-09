"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import Masonry from "masonry-layout";
import styles from "./SMainGridB.module.scss";
import GridItemA from "./GridItemA";
import { Work } from "@/lib/works";

export default function SMainGridB() {
  const [works, setWorks] = useState<Work[]>([]);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const masonryRef = useRef<Masonry | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const gutter = 16;
  const minWidth = 280;

  // Derive cols/columnWidth together so they can never drift out of sync
  // the way two separate useState values could.
  const { cols, columnWidth } = useMemo(() => {
    const cols = Math.max(1, Math.floor((containerWidth + gutter) / (minWidth + gutter)));
    return { cols, columnWidth: (containerWidth - (cols - 1) * gutter) / cols };
  }, [containerWidth]);

  // A "wide" item spans 2 grid columns: its outer width must equal two
  // columns plus the gutter between them so Masonry's own colSpan detection
  // (based on element width vs. columnWidth) picks it up automatically.
  // Falls back to a single column when the grid itself only has one.
  const getItemWidth = (work: Work) =>
    work.wide && cols >= 2 ? columnWidth * 2 + gutter : columnWidth;

  // 1) Load data once on mount
  useEffect(() => {
    fetch("/api/works")
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => setWorks(data))
      .catch((err) => console.error("Failed to fetch works:", err));
  }, []);

  // 2) Single ResizeObserver to handle container metrics and debouncing
  useEffect(() => {
    if (!gridRef.current) return;

    // Measure immediately on mount
    const initialWidth = gridRef.current.getBoundingClientRect().width;
    if (initialWidth) {
      setContainerWidth(initialWidth);
    }

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (!w) return;

      // Debounce the state update to avoid thrashing during active window resizing
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

      debounceTimerRef.current = setTimeout(() => {
        setContainerWidth(w);
      }, 100);
    });

    ro.observe(gridRef.current);

    return () => {
      ro.disconnect();
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []); // Run once on mount. Completely independent of works.length.

  // 3) Manage Masonry Instance lifecycle
  useEffect(() => {
    if (!gridRef.current || works.length === 0 || !columnWidth) return;

    // If instance doesn't exist, build it
    if (!masonryRef.current) {
      masonryRef.current = new Masonry(gridRef.current, {
        itemSelector: "[data-masonry-item]",
        columnWidth,
        gutter,
        percentPosition: false,
        transitionDuration: "0ms",
        resize: false, 
      });
    } else {
      // If instance exists, update options and trigger layout
      masonryRef.current.options!.columnWidth = columnWidth;
      masonryRef.current.layout?.();
    }

    return () => {
      // Optional: if component unmounts entirely, clean up.
      // We don't destroy on every columnWidth change anymore to prevent DOM stutter.
    };
  }, [works, columnWidth]); // Only updates when data loads or column width shifts



const hasScrolledRef = useRef(false);

useEffect(() => {
  if (works.length === 0 || !columnWidth || hasScrolledRef.current) return;
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  // Masonry positions via rAF, so wait one frame after layout
  const id = setTimeout(() => {
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    hasScrolledRef.current = true;
  }, 50);

  return () => clearTimeout(id);
}, [works, columnWidth]);





  // Fully cleanup Masonry only when the element unmounts completely
  useEffect(() => {
    return () => {
      masonryRef.current?.destroy?.();
      masonryRef.current = null;
    };
  }, []);







  return (
    <section className={`${styles.section} usection`}>
      <div className={`${styles.container} umx usection-spacer-sm`}>
        <div className={styles.grid} ref={gridRef}>
          {works.map((work) => (
            <GridItemA
              columnWidth={getItemWidth(work)}
              work={work}
              key={work.slug} // Avoid using array index here if possible
            />
          ))}
        </div>
      </div>
    </section>
  );
}