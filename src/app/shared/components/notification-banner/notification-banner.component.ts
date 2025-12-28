import { Component, OnInit, OnDestroy, Inject, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectAllNotifications } from '../../../core/store/notification/notification.selectors';
import * as NotificationActions from '../../../core/store/notification/notification.actions';
import { Notification } from '../../../core/store/notification/notification.state';

@Component({
  selector: 'app-notification-banner',
  standalone: false,
  templateUrl: './notification-banner.component.html',
  styleUrls: ['./notification-banner.component.scss']
})
export class NotificationBannerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private timers: { [key: string]: any } = {};
  private readonly store = inject(Store);
  notifications$ = this.store.select(selectAllNotifications);


  ngOnInit() {
    this.notifications$.pipe(takeUntil(this.destroy$)).subscribe((notifications) => {
      notifications.forEach((notification) => {
        if (notification.duration && notification.duration > 0 && !this.timers[notification.id]) {
          this.timers[notification.id] = setTimeout(() => {
            this.removeNotification(notification.id);
            delete this.timers[notification.id];
          }, notification.duration);
        }
      });
    });
  }

  removeNotification(id: string) {
    if (this.timers[id]) {
      clearTimeout(this.timers[id]);
      delete this.timers[id];
    }
    this.store.dispatch(NotificationActions.removeNotification({ id }));
  }

  getNotificationClass(notification: Notification): string {
    return `notification-${notification.notificationType}`;
  }

  getNotificationIcon(type: string): string {
    const icons: { [key: string]: string } = {
      success: 'check_circle',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    return icons[type] || 'info';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    Object.values(this.timers).forEach(timer => clearTimeout(timer));
  }
}
