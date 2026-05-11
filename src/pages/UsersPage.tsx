import { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './UsersPage.module.css';
import Card from '@/components/ui/Card';
import clsx from 'clsx';
import { User } from '@/types';

const mockUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active', joinedAt: 'Jan 2, 2024' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'active', joinedAt: 'Jan 15, 2024' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'inactive', joinedAt: 'Feb 3, 2024' },
  { id: '4', name: 'Dave Brown', email: 'dave@example.com', role: 'Editor', status: 'active', joinedAt: 'Feb 20, 2024' },
  { id: '5', name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'active', joinedAt: 'Mar 5, 2024' },
  { id: '6', name: 'Frank Lee', email: 'frank@example.com', role: 'Viewer', status: 'inactive', joinedAt: 'Mar 18, 2024' },
];

const filters = ['all', 'active', 'inactive'];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const visible = mockUsers.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || u.status === filter;
    return matchSearch && matchFilter;
  });

  const initials = (name: string) => name.split(' ').map((n) => n[0]).join('');

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <div className={styles.searchWrap}>
          <Search size={14} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search users..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={clsx(styles.filterBtn, filter === f && styles.filterActive)}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <Card>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>User</th>
              <th className={styles.th}>Role</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Joined</th>
              <th className={styles.th}></th>
            </tr>
          </thead>
          <tbody>
            {visible.map((u) => (
              <tr key={u.id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.userCell}>
                    <div className={styles.avatar}>{initials(u.name)}</div>
                    <div>
                      <div className={styles.userName}>{u.name}</div>
                      <div className={styles.userEmail}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.td}>{u.role}</td>
                <td className={styles.td}>
                  <span className={clsx(styles.badge, u.status === 'active' ? styles.badgeActive : styles.badgeInactive)}>
                    {u.status}
                  </span>
                </td>
                <td className={styles.td}>{u.joinedAt}</td>
                <td className={styles.td}>
                  <button className={styles.actionBtn}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
