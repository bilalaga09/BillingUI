export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  notificationType: NotificationType;
  message: string;
  duration?: number; // in ms, 0 = infinite
  timestamp: number;
}

export interface NotificationState {
  notifications: Notification[];
}
