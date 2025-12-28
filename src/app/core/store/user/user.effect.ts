import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { BillingService } from "../../services/billing.service";
import { catchError, map, mergeMap, of } from "rxjs";
import { User } from "./user.state";

@Injectable()
export class UserEffects {

    private actions$ = inject(Actions);
    private billingService = inject(BillingService);

    loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadCurrentUser),
      mergeMap(() =>
        this.billingService.getCurrentUser().pipe(
          map((user: User) =>
            UserActions.loadCurrentUserSuccess({ user })
          ),
          catchError((error) =>
            of(UserActions.loadCurrentUserFailure({ error }))
          )
        )
      )
    )
  );

}