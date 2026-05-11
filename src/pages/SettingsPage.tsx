import { useState } from 'react';
import styles from './SettingsPage.module.css';
import Card from '@/components/ui/Card';

type ToggleItem = {
  id: string;
  label: string;
  desc: string;
  defaultOn: boolean;
};

const notifications: ToggleItem[] = [
  { id: 'email', label: 'Email Notifications', desc: 'Receive updates via email', defaultOn: true },
  { id: 'push', label: 'Push Notifications', desc: 'Browser push notifications', defaultOn: false },
  { id: 'weekly', label: 'Weekly Report', desc: 'Get a summary every Monday', defaultOn: true },
  { id: 'security', label: 'Security Alerts', desc: 'Alerts for suspicious activity', defaultOn: true },
];

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" checked={on} onChange={onChange} />
      <span className={styles.toggleSlider} />
    </label>
  );
}

export default function SettingsPage() {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(notifications.map((n) => [n.id, n.defaultOn]))
  );

  const flip = (id: string) => setToggles((t) => ({ ...t, [id]: !t[id] }));

  return (
    <div className={styles.page}>
      <Card>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Profile</h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label}>First Name</label>
              <input className={styles.input} defaultValue="Jane" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Last Name</label>
              <input className={styles.input} defaultValue="Doe" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} type="email" defaultValue="jane@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Role</label>
              <input className={styles.input} defaultValue="Administrator" readOnly />
            </div>
            <div className={styles.formGroupFull}>
              <label className={styles.label}>Bio</label>
              <textarea className={styles.textarea} defaultValue="Dashboard admin and power user." />
            </div>
          </div>
          <button className={styles.saveBtn}>Save Changes</button>
        </div>
      </Card>

      <Card>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Notifications</h2>
          <div className={styles.toggleList}>
            {notifications.map((n) => (
              <div key={n.id} className={styles.toggleRow}>
                <div className={styles.toggleInfo}>
                  <span className={styles.toggleLabel}>{n.label}</span>
                  <span className={styles.toggleDesc}>{n.desc}</span>
                </div>
                <Toggle on={toggles[n.id]} onChange={() => flip(n.id)} />
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className={styles.dangerZone}>
        <div className={styles.dangerTitle}>Danger Zone</div>
        <div className={styles.dangerDesc}>Permanently delete your account and all associated data.</div>
        <button className={styles.dangerBtn}>Delete Account</button>
      </div>
    </div>
  );
}
