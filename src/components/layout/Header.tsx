import { useLocation } from 'react-router-dom';
import { Search, Bell, Plus } from 'lucide-react';
import styles from './Header.module.css';

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  '/overview': { title: 'Overview', subtitle: 'Welcome back, Jane!' },
  '/analytics': { title: 'Analytics', subtitle: 'Track your performance metrics' },
  '/users': { title: 'Users', subtitle: 'Manage your team members' },
  '/settings': { title: 'Settings', subtitle: 'Configure your workspace' },
};

export default function Header() {
  const location = useLocation();
  const info = pageTitles[location.pathname] || { title: 'Dashboard', subtitle: '' };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div>
          <h1 className={styles.title}>{info.title}</h1>
          <p className={styles.subtitle}>{info.subtitle}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.searchBox}>
          <Search size={14} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <button className={styles.iconBtn} aria-label="Notifications">
          <Bell size={18} />
          <span className={styles.badge}>3</span>
        </button>
        <button className={styles.addBtn}>
          <Plus size={16} />
          <span>New</span>
        </button>
      </div>
    </header>
  );
}
