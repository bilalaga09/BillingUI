import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './notification.state';

export const selectNotificationState = createFeatureSelector<NotificationState>('notification');

export const selectAllNotifications = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.notifications
);

export const selectLatestNotification = createSelector(
  selectAllNotifications,
  (notifications) => notifications.length > 0 ? notifications[notifications.length - 1] : null
);

export const selectNotificationCount = createSelector(
  selectAllNotifications,
  (notifications) => notifications.length
);
