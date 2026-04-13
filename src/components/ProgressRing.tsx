import './ProgressRing.scss';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ProgressRingProps {
  progress: number;
  totalPage?: number;
}
export const ProgressRing = ({ progress, totalPage }: ProgressRingProps) => {

  const totalPageDisplay = totalPage ?? 100;
  const ProgressBase = totalPage ? "/" + totalPage : "%";
  return (
    <div className={`cv-progress-ring visible`}>
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
      <span className="cv-progress-label">{Math.round(progress * totalPageDisplay)}{ProgressBase}</span>
    </div>
  );
};
