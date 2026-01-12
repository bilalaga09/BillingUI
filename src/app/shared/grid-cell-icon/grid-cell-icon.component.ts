import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { BaseComponent } from '../../views/base/base-component';

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
  private params!: ICellRendererParams;

  @Input() icons = [
    { type: 'check', class: 'green-800-fg' },
    { type: 'delete', class: 'red-800-fg' },
  ];
  constructor() {
    super();
  }
  //get called once before the renderer is used
  // agInit(params: ICellRendererParams): void {
  //   this.params = params;
  //   this.icons = params['icons'];
  // }
  agInit(params: ICellRendererParams): void {
    this.params = params;

    const rendererParams = params.colDef?.cellRendererParams as {
      icons?: Array<{ type: string; class: string; title?: string }>;
    };

    this.icons = rendererParams?.icons ?? this.icons;
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  iconClicked(iconType: string) {
    this.utilityService.clicked('icon', iconType, this.params);
  }
  getTitle(icon: any): string {
    return icon.title ?? icon.type;
  }
}
