import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UiService {
  private _sidebarOpen = new BehaviorSubject<boolean>(true);
  sidebarOpen$ = this._sidebarOpen.asObservable();

  toggle() {
    this._sidebarOpen.next(!this._sidebarOpen.value);
  }

  open() {
    this._sidebarOpen.next(true);
  }

  close() {
    this._sidebarOpen.next(false);
  }
}
