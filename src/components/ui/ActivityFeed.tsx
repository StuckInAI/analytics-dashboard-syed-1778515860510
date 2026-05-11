import { UserPlus, Edit3, Trash2, LogIn } from 'lucide-react';
import styles from './ActivityFeed.module.css';
import { ActivityItem } from '@/types';

type ActivityFeedProps = {
  items: ActivityItem[];
};

const typeConfig: Record<ActivityItem['type'], { icon: React.ReactNode; color: string }> = {
  create: { icon: <UserPlus size={13} />, color: 'var(--color-accent-green)' },
  update: { icon: <Edit3 size={13} />, color: 'var(--color-accent-blue)' },
  delete: { icon: <Trash2 size={13} />, color: 'var(--color-accent-red)' },
  login: { icon: <LogIn size={13} />, color: 'var(--color-accent-orange)' },
};

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className={styles.feed}>
      {items.map((item) => {
        const cfg = typeConfig[item.type];
        return (
          <div key={item.id} className={styles.item}>
            <div
              className={styles.icon}
              style={{ background: `color-mix(in srgb, ${cfg.color} 15%, transparent)`, color: cfg.color }}
            >
              {cfg.icon}
            </div>
            <div className={styles.body}>
              <p className={styles.text}>
                <strong className={styles.user}>{item.user}</strong>
                {' '}{item.action}{' '}
                <span className={styles.target}>{item.target}</span>
              </p>
              <span className={styles.time}>{item.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
