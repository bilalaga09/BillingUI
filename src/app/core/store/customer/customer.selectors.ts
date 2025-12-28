import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from './customer.state';

export const selectCustomerState = createFeatureSelector<CustomerState>('customer');

export const selectAllCustomers = createSelector(selectCustomerState, (s) => s.customers);
export const selectCustomerTotal = createSelector(selectCustomerState, (s) => s.totalCount);
export const selectCustomerLoading = createSelector(selectCustomerState, (s) => s.loading);
