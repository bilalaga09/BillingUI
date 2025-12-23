import { inject, Injectable, OnDestroy } from "@angular/core";
import { BillingService } from "../../core/services/billing.service";
import { Subject } from "rxjs";

@Injectable()

export abstract class BaseComponent implements OnDestroy{
    

    protected readonly billingService = inject(BillingService);
    protected readonly destroy$ = new Subject<void>();
    
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}