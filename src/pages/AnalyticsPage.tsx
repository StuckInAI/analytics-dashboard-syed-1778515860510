import styles from './AnalyticsPage.module.css';
import Card from '@/components/ui/Card';
import LineChart from '@/components/ui/LineChart';
import BarChart from '@/components/ui/BarChart';
import DonutChart from '@/components/ui/DonutChart';
import { ChartDataPoint } from '@/types';

const sessionData: ChartDataPoint[] = [
  { label: 'W1', value: 3200 },
  { label: 'W2', value: 4500 },
  { label: 'W3', value: 3900 },
  { label: 'W4', value: 5200 },
  { label: 'W5', value: 4800 },
  { label: 'W6', value: 6100 },
  { label: 'W7', value: 7200 },
  { label: 'W8', value: 6800 },
];

const channelData: ChartDataPoint[] = [
  { label: 'Direct', value: 4200 },
  { label: 'Organic', value: 3100 },
  { label: 'Social', value: 1900 },
  { label: 'Email', value: 1400 },
  { label: 'Paid', value: 900 },
];

const deviceSlices = [
  { label: 'Desktop', value: 58, color: 'var(--color-accent-blue)' },
  { label: 'Mobile', value: 32, color: 'var(--color-accent-purple)' },
  { label: 'Tablet', value: 10, color: 'var(--color-accent-cyan)' },
];

const metrics = [
  { label: 'Bounce Rate', value: 38, display: '38%' },
  { label: 'Avg Session', value: 72, display: '4m 12s' },
  { label: 'Pages/Session', value: 65, display: '3.8' },
  { label: 'Conversion', value: 24, display: '2.4%' },
];

const funnel = [
  { label: 'Visitors', value: 24521, pct: 100, color: 'var(--color-accent-blue)' },
  { label: 'Engaged', value: 14230, pct: 58, color: 'var(--color-accent-purple)' },
  { label: 'Leads', value: 5840, pct: 24, color: 'var(--color-accent-cyan)' },
  { label: 'Customers', value: 1190, pct: 5, color: 'var(--color-accent-green)' },
];

export default function AnalyticsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.topRow}>
        <div className={styles.statsRow}>
          <div className={styles.statBox}>
            <div className={styles.statBoxLabel}>Total Sessions</div>
            <div className={styles.statBoxValue}>38.4K</div>
            <div className={styles.statBoxChange}>+11.2%</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statBoxLabel}>Unique Visitors</div>
            <div className={styles.statBoxValue}>24.5K</div>
            <div className={styles.statBoxChange}>+8.7%</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statBoxLabel}>Page Views</div>
            <div className={styles.statBoxValue}>92.1K</div>
            <div className={styles.statBoxChange}>+14.3%</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statBoxLabel}>Bounce Rate</div>
            <div className={styles.statBoxValue}>38%</div>
            <div className={styles.statBoxChange} style={{ color: 'var(--color-accent-red)' }}>+2.1%</div>
          </div>
        </div>

        <Card title="Conversion Funnel" subtitle="Visitor journey" className={styles.topRow}>
          <div className={styles.funnelList}>
            {funnel.map((f, i) => (
              <div key={i} className={styles.funnelItem}>
                <div className={styles.funnelHeader}>
                  <span className={styles.funnelLabel}>{f.label}</span>
                  <span className={styles.funnelValue}>{f.value.toLocaleString()}</span>
                </div>
                <div className={styles.funnelBar}>
                  <div
                    className={styles.funnelFill}
                    style={{ width: `${f.pct}%`, background: f.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Device Breakdown" subtitle="Platform usage">
          <DonutChart slices={deviceSlices} size={120} />
        </Card>
      </div>

      <Card title="Sessions Over Time" subtitle="Weekly session data" className={styles.mainChart}>
        <LineChart data={sessionData} height={200} />
      </Card>

      <div className={styles.twoCol}>
        <Card title="Traffic by Channel" subtitle="Acquisition sources">
          <BarChart data={channelData} height={180} />
        </Card>

        <Card title="Engagement Metrics" subtitle="Key performance indicators">
          <div className={styles.metricsList}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricRow}>
                <span className={styles.metricLabel}>{m.label}</span>
                <div className={styles.metricBar}>
                  <div className={styles.metricFill} style={{ width: `${m.value}%` }} />
                </div>
                <span className={styles.metricValue}>{m.display}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
