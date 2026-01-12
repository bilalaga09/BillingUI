import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CellClickedEvent } from 'ag-grid-community';
import { Attribute } from '../../core/models/utility';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private _clickedRecord = new BehaviorSubject<Attribute>({
    code: '',
    value: '',
  });

  constructor() {}
  clicked(
    code: string,
    value: string,
    data?: object,
    event?: CellClickedEvent
  ): void {
    this._clickedRecord.next({ code: code, value: value, data, event });
  }
}
