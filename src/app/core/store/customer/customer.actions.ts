import { createAction, props } from '@ngrx/store';

export const loadCustomers = createAction(
  '[Customer] Load Customers',
  props<{ params: { page: number; pageSize: number; filter?: string } }>()
);

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ customers: any[]; total: number }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);

export const deleteCustomer = createAction(
  '[Customer] Delete Customer',
  props<{ id: string | number }>()
);

export const deleteCustomerSuccess = createAction(
  '[Customer] Delete Customer Success',
  props<{ id: string | number }>()
);

export const deleteCustomerFailure = createAction(
  '[Customer] Delete Customer Failure',
  props<{ error: any }>()
);
