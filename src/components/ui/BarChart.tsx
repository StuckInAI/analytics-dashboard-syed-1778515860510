import styles from './BarChart.module.css';
import { ChartDataPoint } from '@/types';

type BarChartProps = {
  data: ChartDataPoint[];
  height?: number;
};

export default function BarChart({ data, height = 160 }: BarChartProps) {
  const max = Math.max(...data.map((d) => Math.max(d.value, d.secondary ?? 0)), 1);

  return (
    <div className={styles.chart} style={{ height: `${height}px` }}>
      {data.map((d, i) => (
        <div key={i} className={styles.group}>
          <div className={styles.bars}>
            <div
              className={styles.bar}
              style={{ height: `${(d.value / max) * 100}%` }}
              title={`${d.label}: ${d.value}`}
            />
            {d.secondary !== undefined && (
              <div
                className={styles.barSecondary}
                style={{ height: `${(d.secondary / max) * 100}%` }}
                title={`${d.label} secondary: ${d.secondary}`}
              />
            )}
          </div>
          <span className={styles.label}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
