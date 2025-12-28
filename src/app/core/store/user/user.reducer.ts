import { createReducer, on } from "@ngrx/store";
import { UserState } from "./user.state";
import * as UserActions from './user.actions';

export const initialState: UserState = {
  user: null,
  loading: false,
};

export const userReducer = createReducer(
    initialState,

    on(UserActions.loadCurrentUser, (state) => ({
      ...state,
      loading: true
    })),

    on(UserActions.loadCurrentUserSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),

    on(UserActions.loadCurrentUserFailure, (state) => ({
      ...state,
      user: null,
      loading: false
    }))
);
