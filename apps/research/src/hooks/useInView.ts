import { useEffect, useState } from "react";

const callbacks = new Map<Element, (v: boolean) => void>();

const observer =
  typeof window !== "undefined"
    ? new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => callbacks.get(e.target)?.(e.isIntersecting)),
        { threshold: 0.1 },
      )
    : null;

export function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !observer) return;
    callbacks.set(el, setInView);
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [ref]);

  return inView;
}
