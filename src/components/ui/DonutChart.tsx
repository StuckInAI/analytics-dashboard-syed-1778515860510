import styles from './DonutChart.module.css';

type DonutSlice = {
  label: string;
  value: number;
  color: string;
};

type DonutChartProps = {
  slices: DonutSlice[];
  size?: number;
};

export default function DonutChart({ slices, size = 140 }: DonutChartProps) {
  const total = slices.reduce((s, d) => s + d.value, 0) || 1;
  const r = 50;
  const cx = 60;
  const cy = 60;
  const stroke = 18;
  const circum = 2 * Math.PI * r;

  let offset = 0;
  const segments = slices.map((s) => {
    const frac = s.value / total;
    const dashLen = frac * circum;
    const seg = { ...s, dashLen, dashOffset: circum - offset };
    offset += dashLen;
    return seg;
  });

  return (
    <div className={styles.wrap}>
      <svg width={size} height={size} viewBox="0 0 120 120">
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={stroke}
        />
        {segments.map((seg, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${seg.dashLen} ${circum - seg.dashLen}`}
            strokeDashoffset={seg.dashOffset}
            strokeLinecap="butt"
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        ))}
        <text x={cx} y={cy - 6} textAnchor="middle" className={styles.centerNum}>
          {total.toLocaleString()}
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" className={styles.centerLabel}>
          Total
        </text>
      </svg>
      <div className={styles.legend}>
        {slices.map((s, i) => (
          <div key={i} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: s.color }} />
            <span className={styles.legendLabel}>{s.label}</span>
            <span className={styles.legendValue}>{((s.value / total) * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
