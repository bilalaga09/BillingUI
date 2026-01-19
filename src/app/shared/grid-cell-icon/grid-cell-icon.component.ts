import { Component, computed, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { BaseComponent } from '../../views/base/base-component';
import { IconParam } from '../../core/models/utility';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from '../../views/customer/edit-customer/edit-customer.component';

@Component({
  selector: 'app-grid-cell-icon',
  standalone: false,
  templateUrl: './grid-cell-icon.component.html',
  styleUrls: ['./grid-cell-icon.component.scss'],
})
export class GridCellIconComponent
  extends BaseComponent
  implements ICellRendererAngularComp
{
  
  iconClass = computed(() => ('fa-regular fa-pen-to-square'));
  private params!: ICellRendererParams;

  @Input() icons = [
  { type: 'edit', icon: 'edit', class: 'blue-800-fg', title: 'Edit', openFrom: 'customer' },
  { type: 'delete', icon: 'delete', class: 'red-800-fg', title: 'Delete', openFrom: 'customer' },
];
  constructor(private dialog: MatDialog) {
    super();
  }
  //get called once before the renderer is used
  agInit(params: ICellRendererParams & IconParam): void {
    this.params = params;
    this.icons = params.icons || this.icons;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  iconClicked(icon: any): void {
    console.log('icon clicked', icon);
    // this.utilityService.clicked('icon', icon, this.params);
    if (icon.type === 'edit') {
      const dialogRef = this.dialog.open(EditCustomerComponent, {
        width: '500px',
        data: {  } // pass row data to dialog
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Updated data:', result);
          // TODO: call API to save the updated row
        }
      });
    }
  }
  
  getTitle(icon: any): string {
    return icon.title ?? icon.type;
  }
}
