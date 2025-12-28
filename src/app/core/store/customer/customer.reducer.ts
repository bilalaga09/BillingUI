import { createReducer, on } from '@ngrx/store';
import * as CustomerActions from './customer.actions';
import { CustomerState } from './customer.state';

export const initialState: CustomerState = {
  customers: [],
  totalCount: 0,
  loading: false,
  error: null,
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.loadCustomers, (state) => ({ ...state, loading: true, error: null })),
  on(CustomerActions.loadCustomersSuccess, (state, { customers, total }) => ({
    ...state,
    customers,
    total,
    loading: false,
  })),
  on(CustomerActions.loadCustomersFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(CustomerActions.deleteCustomerSuccess, (state, { id }) => ({
    ...state,
    customers: state.customers.filter((c) => c.id !== id),
    totalCount: Math.max(0, state.totalCount - 1),
  }))
);
