import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotificationsPanelComponent } from './components/notifications-panel/notifications-panel.component';
import { NotificationBannerComponent } from './components/notification-banner/notification-banner.component';
import { BillingAgGridComponent } from './components/billing-ag-grid/billing-ag-grid.component';
import { GridCellIconComponent } from './grid-cell-icon/grid-cell-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NotificationsPanelComponent,
    NotificationBannerComponent,
    BillingAgGridComponent,
    GridCellIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AgGridModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NotificationsPanelComponent,
    NotificationBannerComponent,
    BillingAgGridComponent,
    AgGridModule
  ]
})
export class SharedModule { }
