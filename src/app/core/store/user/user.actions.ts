import { createAction, props } from "@ngrx/store";
import { User } from "./user.state";

export const loadCurrentUser = createAction(
  '[User] load Current User'
);

export const loadCurrentUserSuccess = createAction(
  '[User] Load Current User Success',
  props<{ user: User }>()
);

export const loadCurrentUserFailure = createAction(
  '[User] Load Current User Failure',
  props<{ error: any }>()
);