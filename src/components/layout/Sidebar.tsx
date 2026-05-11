import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Zap,
  Bell,
  HelpCircle,
} from 'lucide-react';
import styles from './Sidebar.module.css';
import clsx from 'clsx';

type NavItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: 'Overview', path: '/overview', icon: <LayoutDashboard size={18} /> },
  { label: 'Analytics', path: '/analytics', icon: <BarChart3 size={18} /> },
  { label: 'Users', path: '/users', icon: <Users size={18} /> },
  { label: 'Settings', path: '/settings', icon: <Settings size={18} /> },
];

const bottomItems: NavItem[] = [
  { label: 'Notifications', path: '#', icon: <Bell size={18} /> },
  { label: 'Help', path: '#', icon: <HelpCircle size={18} /> },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Zap size={20} />
        </div>
        <span className={styles.logoText}>Luminary</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <span className={styles.navSectionLabel}>Main Menu</span>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={clsx(
                styles.navItem,
                location.pathname === item.path && styles.navItemActive
              )}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className={styles.navSection}>
          <span className={styles.navSectionLabel}>Support</span>
          {bottomItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className={styles.navItem}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className={styles.userCard}>
        <div className={styles.userAvatar}>JD</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Jane Doe</span>
          <span className={styles.userRole}>Administrator</span>
        </div>
      </div>
    </aside>
  );
}
