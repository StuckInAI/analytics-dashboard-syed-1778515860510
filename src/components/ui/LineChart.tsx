import styles from './LineChart.module.css';
import { ChartDataPoint } from '@/types';

type LineChartProps = {
  data: ChartDataPoint[];
  height?: number;
};

export default function LineChart({ data, height = 160 }: LineChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const min = Math.min(...data.map((d) => d.value), 0);
  const range = max - min || 1;
  const w = 600;
  const h = height;
  const padX = 10;
  const padY = 16;

  const points = data.map((d, i) => ({
    x: padX + (i / (data.length - 1 || 1)) * (w - padX * 2),
    y: padY + (1 - (d.value - min) / range) * (h - padY * 2),
    label: d.label,
    value: d.value,
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');
  const areaPath = [
    `M ${points[0].x},${h}`,
    ...points.map((p) => `L ${p.x},${p.y}`),
    `L ${points[points.length - 1].x},${h}`,
    'Z',
  ].join(' ');

  return (
    <div className={styles.wrapper}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className={styles.svg}
        style={{ height: `${height}px` }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-gradient-start)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-gradient-start)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#lineGrad)" />
        <polyline
          points={polyline}
          fill="none"
          stroke="var(--color-accent-blue)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="var(--color-accent-blue)"
            stroke="var(--color-bg-card)"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div className={styles.labels}>
        {data.map((d, i) => (
          <span key={i} className={styles.label}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}
