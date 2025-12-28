import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CustomerActions from './customer.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { BillingService } from '../../services/billing.service';

@Injectable()
export class CustomerEffects {
  private actions$ = inject(Actions);
  private billingService = inject(BillingService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.loadCustomers),
      mergeMap((action) =>
        this.billingService.getCustomers(action.params).pipe(
          map((res) =>
            CustomerActions.loadCustomersSuccess({ customers: res.items, total: res.totalCount })
          ),
          catchError((error) => of(CustomerActions.loadCustomersFailure({ error })))
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerActions.deleteCustomer),
      mergeMap((action) =>
        this.billingService.deleteCustomer(action.id).pipe(
          map(() => CustomerActions.deleteCustomerSuccess({ id: action.id })),
          catchError((error) => of(CustomerActions.deleteCustomerFailure({ error })))
        )
      )
    )
  );
}
