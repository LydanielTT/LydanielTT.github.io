import { useEffect, useState, type RefObject } from 'react';

export const useScrollProgress = (sectionRef: RefObject<HTMLElement | null>) => {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const scrolled = el.scrollTop;
      const scrollable = Math.max(1, el.scrollHeight - el.clientHeight);
      setInView(true);
      setProgress(Math.min(1, scrolled / scrollable));
    };

    el.addEventListener('scroll', update, { passive: true });
    update();
    return () => el.removeEventListener('scroll', update);
  }, [sectionRef]);

  return { progress, inView };
};
