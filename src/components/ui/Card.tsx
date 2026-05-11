import clsx from 'clsx';
import styles from './Card.module.css';

type CardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
};

export default function Card({ title, subtitle, children, className, action }: CardProps) {
  return (
    <div className={clsx(styles.card, className)}>
      {(title || action) && (
        <div className={styles.header}>
          <div>
            {title && <h3 className={styles.title}>{title}</h3>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {action && <div className={styles.action}>{action}</div>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
