import { useEffect, useState, type RefObject } from 'react';

export const useScrollY = (ref: RefObject<HTMLDivElement | null>) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const handler = () => setScrollY(el.scrollTop);
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, [ref]);
  return scrollY;
};
