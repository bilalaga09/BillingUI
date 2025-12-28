import { inject, Injectable, OnDestroy } from "@angular/core";
import { BillingService } from "../../core/services/billing.service";
import { Subject } from "rxjs";
import { AuthService } from "../../core/auth/auth.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable()

export abstract class BaseComponent implements OnDestroy{
    

    protected readonly billingService = inject(BillingService);
    protected readonly authService = inject(AuthService);
    protected readonly router = inject(Router);
    protected readonly destroy$ = new Subject<void>();
    protected readonly store = inject(Store);
    
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}