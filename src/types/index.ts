export type StatCard = {
  label: string;
  value: string | number;
  change: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  color?: string;
};

// Alias for backward compatibility
export type StatCardData = StatCard;

export type ChartDataPoint = {
  label: string;
  value: number;
  secondary?: number;
};

export type ActivityItem = {
  id: string;
  type: 'create' | 'update' | 'delete' | 'login';
  user: string;
  action: string;
  target: string;
  time: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  avatar?: string;
  joinedAt: string;
};
