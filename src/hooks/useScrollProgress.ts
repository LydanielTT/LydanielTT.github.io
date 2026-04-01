import { useEffect, useState, type RefObject } from 'react';

export const useScrollProgress = (sectionRef: RefObject<HTMLElement | null>) => {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      setInView(top < viewportH && top + height > 0);
      const scrolled = Math.max(0, -top);
      const scrollable = Math.max(1, height - viewportH);
      setProgress(Math.min(1, scrolled / scrollable));
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [sectionRef]);

  return { progress, inView };
};
