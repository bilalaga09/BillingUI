import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState =
  createFeatureSelector<UserState>('user');

export const selectCurrentUser =
  createSelector(selectUserState, state => state.user);

export const selectUserRole =
  createSelector(selectCurrentUser, user => user?.roleId);

export const isUserLoaded =
  createSelector(selectUserState, state => !!state.user);
