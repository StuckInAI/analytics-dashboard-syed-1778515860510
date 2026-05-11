import { useState } from 'react';
import styles from './OverviewPage.module.css';
import Card from '@/components/ui/Card';
import StatCard from '@/components/ui/StatCard';
import LineChart from '@/components/ui/LineChart';
import BarChart from '@/components/ui/BarChart';
import ActivityFeed from '@/components/ui/ActivityFeed';
import DonutChart from '@/components/ui/DonutChart';
import { StatCard as StatCardType, ChartDataPoint, ActivityItem } from '@/types';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

const stats: StatCardType[] = [
  { label: 'Total Users', value: '24,521', change: 12.5, changeLabel: 'vs last month', icon: <Users size={18} />, color: 'var(--color-accent-blue)' },
  { label: 'Revenue', value: '$84,200', change: 8.2, changeLabel: 'vs last month', icon: <DollarSign size={18} />, color: 'var(--color-accent-green)' },
  { label: 'Growth Rate', value: '18.4%', change: 3.1, changeLabel: 'vs last month', icon: <TrendingUp size={18} />, color: 'var(--color-accent-purple)' },
  { label: 'Active Sessions', value: '1,893', change: -2.4, changeLabel: 'vs last month', icon: <Activity size={18} />, color: 'var(--color-accent-orange)' },
];

const lineData: ChartDataPoint[] = [
  { label: 'Jan', value: 4200 },
  { label: 'Feb', value: 5800 },
  { label: 'Mar', value: 5200 },
  { label: 'Apr', value: 7100 },
  { label: 'May', value: 6400 },
  { label: 'Jun', value: 8900 },
  { label: 'Jul', value: 9400 },
];

const barData: ChartDataPoint[] = [
  { label: 'Mon', value: 320, secondary: 210 },
  { label: 'Tue', value: 480, secondary: 300 },
  { label: 'Wed', value: 390, secondary: 280 },
  { label: 'Thu', value: 520, secondary: 350 },
  { label: 'Fri', value: 610, secondary: 420 },
  { label: 'Sat', value: 290, secondary: 190 },
  { label: 'Sun', value: 240, secondary: 160 },
];

const activityItems: ActivityItem[] = [
  { id: '1', type: 'create', user: 'Alice Johnson', action: 'created account', target: 'Enterprise Plan', time: '2 min ago' },
  { id: '2', type: 'update', user: 'Bob Smith', action: 'updated profile in', target: 'Settings', time: '15 min ago' },
  { id: '3', type: 'login', user: 'Carol White', action: 'logged in from', target: 'New Device', time: '1 hr ago' },
  { id: '4', type: 'delete', user: 'Dave Brown', action: 'removed', target: 'Old Report', time: '3 hr ago' },
];

const donutSlices = [
  { label: 'Direct', value: 4200, color: 'var(--color-accent-blue)' },
  { label: 'Organic', value: 3100, color: 'var(--color-accent-purple)' },
  { label: 'Referral', value: 1800, color: 'var(--color-accent-cyan)' },
  { label: 'Social', value: 900, color: 'var(--color-accent-green)' },
];

export default function OverviewPage() {
  const [_tab, setTab] = useState('week');

  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <StatCard key={i} data={s} />
        ))}
      </div>

      <div className={styles.chartsRow}>
        <Card
          title="Revenue Over Time"
          subtitle="Monthly revenue trend"
          className={styles.lineCard}
          action={
            <div className={styles.tabs}>
              {['week', 'month', 'year'].map((t) => (
                <button
                  key={t}
                  className={styles.tab}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          }
        >
          <LineChart data={lineData} height={180} />
        </Card>

        <Card title="Daily Activity" subtitle="This week" className={styles.barCard}>
          <BarChart data={barData} height={180} />
        </Card>
      </div>

      <div className={styles.bottomRow}>
        <Card title="Traffic Sources" subtitle="Where visitors come from" className={styles.donutCard}>
          <DonutChart slices={donutSlices} size={130} />
        </Card>

        <Card title="Recent Activity" subtitle="Latest actions" className={styles.activityCard}>
          <ActivityFeed items={activityItems} />
        </Card>
      </div>
    </div>
  );
}
