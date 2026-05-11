import styles from './StatCard.module.css';
import { StatCard as StatCardType } from '@/types';
import clsx from 'clsx';

type StatCardProps = {
  data: StatCardType;
  className?: string;
};

export default function StatCard({ data, className }: StatCardProps) {
  const isPositive = data.change >= 0;

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.top}>
        <span className={styles.label}>{data.label}</span>
        {data.icon && (
          <span
            className={styles.icon}
            style={{ color: data.color || 'var(--color-accent-blue)' }}
          >
            {data.icon}
          </span>
        )}
      </div>
      <div className={styles.value}>{data.value}</div>
      <div className={clsx(styles.change, isPositive ? styles.positive : styles.negative)}>
        <span>{isPositive ? '+' : ''}{data.change}%</span>
        {data.changeLabel && <span className={styles.changeLabel}>{data.changeLabel}</span>}
      </div>
    </div>
  );
}
