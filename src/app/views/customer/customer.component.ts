import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as fromCustomer from '../../core/store/customer/customer.selectors';
import * as CustomerActions from '../../core/store/customer/customer.actions';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base-component';
import { ColDef, GridOptions, ICellRendererParams } from 'ag-grid-community';
import { Customer } from '../../core/store/customer/customer.state';
import { GridCellIconComponent } from '../../shared/grid-cell-icon/grid-cell-icon.component';

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  customers$: Observable<Customer[]> = this.store.select(
    fromCustomer.selectAllCustomers
  );
  // total$: Observable<number> = this.store.select(
  //   fromCustomer.selectCustomerTotal
  // );

  page = 1;
  pageSize = 10;
  totalPages = 1;
  pages: number[] = [];

  search = '';
  private search$ = new Subject<string>();
  private subs = new Subscription();

  // icons = [
  //   { icon: 'edit', class: 'btn btn-sm btn-outline-primary' },
  //   { icon: 'delete', class: 'btn btn-sm btn-outline-danger' },
  // ];
  icons = [
    { type: 'edit', class: 'blue-800-fg', title: 'Edit Customer' },
    { type: 'delete', class: 'red-800-fg', title: 'Delete Customer' },
  ];

  // AG Grid configuration
  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      flex: 1,
      minWidth: 150,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Email',
      field: 'email',
      flex: 1,
      minWidth: 180,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Phone',
      field: 'phone',
      flex: 1,
      minWidth: 130,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Address',
      field: 'address',
      flex: 1,
      minWidth: 130,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'GST Number',
      field: 'gstNumber',
      flex: 1,
      minWidth: 130,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Actions',
      colId: 'action',
      filter: false,
      editable: false,
      pinned: 'left',
      cellRenderer: GridCellIconComponent,
      cellRendererParams: (params: ICellRendererParams) => {
        if (params.node.rowPinned !== 'bottom') {
          return {
            icons: this.icons,
            from: 'customer',
          };
        } else {
          return '';
        }
      },
    },
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
    },
    enableBrowserTooltips: true,
    pagination: true,
    paginationPageSize: this.pageSize,
    theme: 'legacy',
  };

  ngOnInit(): void {
    this.load();
    // this.subs.add(
    //   this.search$
    //     .pipe(debounceTime(300), distinctUntilChanged())
    //     .subscribe(() => {
    //       this.page = 1;
    //       this.load();
    //     })
    // );

    // this.total$.subscribe((total) => {
    //   const t = total || 0;
    //   this.totalPages = Math.max(1, Math.ceil(t / this.pageSize));
    //   this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    // });
  }

  load() {
    this.store.dispatch(
      CustomerActions.loadCustomers({
        params: {
          page: this.page,
          pageSize: this.pageSize,
          filter: this.search?.trim() || '',
        },
      })
    );
  }

  // setPage(p: number) {
  //   if (p < 1) p = 1;
  //   if (p > this.totalPages) p = this.totalPages;
  //   if (p === this.page) return;
  //   this.page = p;
  //   this.load();
  // }

  // onSearch(term: string) {
  //   this.search$.next(term);
  // }

  // onPageSizeChange(size: number) {
  //   this.pageSize = Number(size) || 10;
  //   this.page = 1;
  //   this.load();
  // }

  // onAdd() {
  //   this.router.navigate(['customers', 'new']);
  // }

  // onEdit(c: any) {
  //   this.router.navigate(['customers', c.id]);
  // }

  // onDelete(c: any) {
  //   if (!confirm('Delete customer?')) return;
  //   this.store.dispatch(CustomerActions.deleteCustomer({ id: c.id }));
  // }
}
