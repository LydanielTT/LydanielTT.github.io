import { useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface Props {
  scrollY: number;
}

type Pt = [number, number];

const drawHelix = (isDark: boolean, canvas: HTMLCanvasElement, scrollY: number) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const W = canvas.width;
  const H = canvas.height;
  if (W === 0 || H === 0) return;

  ctx.clearRect(0, 0, W, H);
  const color1 = getComputedStyle(canvas).getPropertyValue('--accent').trim() || '#aa3bff';
  const color2 = isDark ? '#ff0000' : '#0ea5e9';

  const phase = scrollY * 0.004;
  const cx = W / 2;

  // Strand 1 is the "primary" backbone — slightly wider amplitude
  const amp1 = W * 0.36;
  // Strand 2 is the "complementary" — offset by slightly less than π for asymmetry
  const amp2 = W * 0.31;
  const phaseOffset = Math.PI * 0.93;

  const numTurns = Math.max(4, Math.ceil(H / 160));
  const numPoints = numTurns * 60;

  const pts1: Pt[] = [];
  const pts2: Pt[] = [];
  const depth: number[] = []; // cos > 0 → strand1 in front

  for (let i = 0; i <= numPoints; i++) {
    const t = (i / numPoints) * numTurns * 2 * Math.PI;
    const y = (i / numPoints) * H;
    pts1.push([cx + amp1 * Math.sin(t + phase), y]);
    pts2.push([cx + amp2 * Math.sin(t + phase + phaseOffset), y]);
    depth.push(Math.cos(t + phase));
  }

  // Draw a smooth path through a list of points
  const smoothPath = (pts: Pt[]) => {
    if (pts.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i][0] + pts[i + 1][0]) / 2;
      const my = (pts[i][1] + pts[i + 1][1]) / 2;
      ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
    }
    ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
    ctx.stroke();
  };

  // Split each strand into front/back runs for depth ordering
  const runs1front: Pt[][] = [];
  const runs1back: Pt[][] = [];
  const runs2front: Pt[][] = [];
  const runs2back: Pt[][] = [];

  let r1f: Pt[] = [],
    r1b: Pt[] = [],
    r2f: Pt[] = [],
    r2b: Pt[] = [];

  for (let i = 0; i <= numPoints; i++) {
    const d = depth[i];
    // strand1 front when d > 0
    if (d > 0) {
      if (r1b.length > 0) {
        runs1back.push(r1b);
        r1b = [];
      }
      r1f.push(pts1[i]);
    } else {
      if (r1f.length > 0) {
        runs1front.push(r1f);
        r1f = [];
      }
      r1b.push(pts1[i]);
    }
    // strand2 front when d < 0
    if (d < 0) {
      if (r2b.length > 0) {
        runs2back.push(r2b);
        r2b = [];
      }
      r2f.push(pts2[i]);
    } else {
      if (r2f.length > 0) {
        runs2front.push(r2f);
        r2f = [];
      }
      r2b.push(pts2[i]);
    }
  }
  if (r1f.length > 0) runs1front.push(r1f);
  if (r1b.length > 0) runs1back.push(r1b);
  if (r2f.length > 0) runs2front.push(r2f);
  if (r2b.length > 0) runs2back.push(r2b);

  // --- 1. Back portions of both strands ---
  ctx.strokeStyle = color1;
  ctx.lineWidth = 1.8;
  ctx.globalAlpha = 0.14;
  runs1back.forEach(smoothPath);

  ctx.strokeStyle = color2;
  ctx.lineWidth = 1.4;
  ctx.globalAlpha = 0.11;
  runs2back.forEach(smoothPath);

  // --- 2. Rungs (base pairs) — drawn behind front strands ---
  const rungEvery = Math.max(3, Math.floor(numPoints / (numTurns * 3.5)));
  for (let i = rungEvery; i < numPoints; i += rungEvery) {
    const ji = Math.min(numPoints - 1, i + Math.round(Math.sin(i) * 2));
    const [x1, y1] = pts1[ji];
    const [x2, y2] = pts2[ji];
    const d = depth[ji];

    const shrink = 0.08;
    const rx1 = x1 + (x2 - x1) * shrink;
    const ry1 = y1 + (y2 - y1) * shrink;
    const rx2 = x2 - (x2 - x1) * shrink;
    const ry2 = y2 - (y2 - y1) * shrink;

    // Gradient rung: color1 → color2
    const grad = ctx.createLinearGradient(rx1, ry1, rx2, ry2);
    grad.addColorStop(0, color1);
    grad.addColorStop(1, color2);

    ctx.beginPath();
    ctx.moveTo(rx1, ry1);
    ctx.lineTo(rx2, ry2);
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = d > 0 ? 0.38 : 0.12;
    ctx.strokeStyle = grad;
    ctx.stroke();
  }

  // --- 3. Front portions of both strands on top ---
  ctx.strokeStyle = color1;
  ctx.lineWidth = 2.2;
  ctx.globalAlpha = 0.55;
  runs1front.forEach(smoothPath);

  ctx.strokeStyle = color2;
  ctx.lineWidth = 1.8;
  ctx.globalAlpha = 0.42;
  runs2front.forEach(smoothPath);

  ctx.globalAlpha = 1;
};

export const ExperienceHelix = ({ scrollY }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(scrollY);

  const { dark } = useTheme();

  useEffect(() => {
    scrollYRef.current = scrollY;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawHelix(dark, canvas, scrollYRef.current);
    });
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (canvasRef.current) drawHelix(dark, canvasRef.current, scrollY);
  }, [scrollY]);

  // Redraw when theme changes (data-theme attribute on <html>)
  useEffect(() => {
    const mo = new MutationObserver(() => {
      if (canvasRef.current) drawHelix(dark, canvasRef.current, scrollYRef.current);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="cv-experience-helix" />;
};
