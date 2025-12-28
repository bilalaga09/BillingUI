import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationsPanelComponent } from './components/notifications-panel/notifications-panel.component';
import { NotificationBannerComponent } from './components/notification-banner/notification-banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NotificationsPanelComponent,
    NotificationBannerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NotificationsPanelComponent,
    NotificationBannerComponent
  ]
})
export class SharedModule { }
