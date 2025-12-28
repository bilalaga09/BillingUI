import { createAction, props } from '@ngrx/store';
import { NotificationType } from './notification.state';

export const showNotification = createAction(
  '[Notification] Show Notification',
  props<{ notificationType: NotificationType; message: string; duration?: number }>()
);

export const removeNotification = createAction(
  '[Notification] Remove Notification',
  props<{ id: string }>()
);

export const clearAllNotifications = createAction(
  '[Notification] Clear All Notifications'
);

// Convenience actions
export const showSuccess = createAction(
  '[Notification] Show Success',
  props<{ message: string; duration?: number }>()
);

export const showError = createAction(
  '[Notification] Show Error',
  props<{ message: string; duration?: number }>()
);

export const showWarning = createAction(
  '[Notification] Show Warning',
  props<{ message: string; duration?: number }>()
);

export const showInfo = createAction(
  '[Notification] Show Info',
  props<{ message: string; duration?: number }>()
);
