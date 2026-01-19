import { CellClickedEvent } from 'ag-grid-community';
export class Attribute {
  code?: string;
  value?: string;
  data?: object;
  event?: CellClickedEvent;
}

export interface IconParam {
  icons?: Array<{ type: string; class: string; icon: string; title: string; openFrom: string }>;
}

