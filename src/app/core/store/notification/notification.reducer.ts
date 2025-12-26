import { createReducer, on } from '@ngrx/store';
import { Notification, NotificationState } from './notification.model';
import * as NotificationActions from './notification.actions';

export const initialState: NotificationState = {
  notifications: []
};

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export const notificationReducer = createReducer(
  initialState,
  on(NotificationActions.showNotification, (state, { notificationType, message, duration }) => {
    const notification: Notification = {
      id: generateId(),
      notificationType,
      message,
      duration: duration ?? 5000, // default 5 seconds
      timestamp: Date.now()
    };
    return {
      ...state,
      notifications: [...state.notifications, notification]
    };
  }),
  on(NotificationActions.showSuccess, (state, { message, duration }) => {
    const notification: Notification = {
      id: generateId(),
      notificationType: 'success',
      message,
      duration: duration ?? 5000,
      timestamp: Date.now()
    };
    return {
      ...state,
      notifications: [...state.notifications, notification]
    };
  }),
  on(NotificationActions.showError, (state, { message, duration }) => {
    const notification: Notification = {
      id: generateId(),
      notificationType: 'error',
      message,
      duration: duration ?? 5000,
      timestamp: Date.now()
    };
    return {
      ...state,
      notifications: [...state.notifications, notification]
    };
  }),
  on(NotificationActions.showWarning, (state, { message, duration }) => {
    const notification: Notification = {
      id: generateId(),
      notificationType: 'warning',
      message,
      duration: duration ?? 5000,
      timestamp: Date.now()
    };
    return {
      ...state,
      notifications: [...state.notifications, notification]
    };
  }),
  on(NotificationActions.showInfo, (state, { message, duration }) => {
    const notification: Notification = {
      id: generateId(),
      notificationType: 'info',
      message,
      duration: duration ?? 5000,
      timestamp: Date.now()
    };
    return {
      ...state,
      notifications: [...state.notifications, notification]
    };
  }),
  on(NotificationActions.removeNotification, (state, { id }) => {
    return {
      ...state,
      notifications: state.notifications.filter(n => n.id !== id)
    };
  }),
  on(NotificationActions.clearAllNotifications, (state) => {
    return {
      ...state,
      notifications: []
    };
  })
);
