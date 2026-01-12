import { Component, Input } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-billing-ag-grid',
  standalone: false,
  templateUrl: './billing-ag-grid.component.html',
  styleUrls: ['./billing-ag-grid.component.scss'],
})
export class BillingAgGridComponent {
  @Input() title: string = '';
  @Input() columnDefs: ColDef[] = [];
  @Input() rowData: any;
  @Input() gridOptions: GridOptions = {};
  @Input() height: string = '560px';
}
