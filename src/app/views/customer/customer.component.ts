import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as fromCustomer from '../../core/store/customer/customer.selectors';
import * as CustomerActions from '../../core/store/customer/customer.actions';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base-component';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit, OnDestroy {
  customers$: Observable<any[]> = this.store.select(fromCustomer.selectAllCustomers);
  total$: Observable<number> = this.store.select(fromCustomer.selectCustomerTotal);

  page = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  search = '';
  private search$ = new Subject<string>();
  private subs = new Subscription();

  ngOnInit(): void {
    this.load();

    this.subs.add(
      this.search$.pipe(debounceTime(300), distinctUntilChanged()).subscribe(() => {
        this.page = 1;
        this.load();
      })
    );

      this.total$.subscribe((total) => {
        const t = total || 0;
        this.totalPages = Math.max(1, Math.ceil(t / this.pageSize));
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      })
  }

  load() {
    this.store.dispatch(
      CustomerActions.loadCustomers({ params: { page: this.page, pageSize: this.pageSize, filter: this.search?.trim() || '' } })
    );
  }

  setPage(p: number) {
    if (p < 1) p = 1;
    if (p > this.totalPages) p = this.totalPages;
    if (p === this.page) return;
    this.page = p;
    this.load();
  }

  onSearch(term: string) {
    this.search$.next(term);
  }

  onPageSizeChange(size: number) {
    this.pageSize = Number(size) || 10;
    this.page = 1;
    this.load();
  }

  onAdd() {
    this.router.navigate(['customers', 'new']);
  }

  onEdit(c: any) {
    this.router.navigate(['customers', c.id]);
  }

  onDelete(c: any) {
    if (!confirm('Delete customer?')) return;
    this.store.dispatch(CustomerActions.deleteCustomer({ id: c.id }));
  }
}

1 
