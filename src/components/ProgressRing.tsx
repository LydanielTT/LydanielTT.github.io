import { useScrollProgress } from '../hooks/useScrollProgress';
import type { RefObject } from 'react';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ProgressRingProps {
  sectionRef: RefObject<HTMLElement | null>;
}
export const ProgressRing = ({ sectionRef }: ProgressRingProps) => {
  const { progress, inView } = useScrollProgress(sectionRef);

  return (
    <div className={`cv-progress-ring ${inView ? 'visible' : ''}`}>
      <svg width="56" height="56" viewBox="0 0 56 56">
        <circle
          className="cv-progress-track"
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          strokeWidth="3"
        />
        <circle
          className="cv-progress-fill"
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          strokeWidth="3"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          strokeLinecap="round"
          transform="rotate(-90 28 28)"
        />
      </svg>
      <span className="cv-progress-label">{Math.round(progress * 100)}%</span>
    </div>
  );
};
