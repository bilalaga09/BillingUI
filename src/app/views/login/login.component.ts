import { Component, inject, OnInit } from '@angular/core';
import { BillingService } from '../../core/services/billing.service';
import { BaseComponent } from '../base/base-component';
import { Login } from '../../core/models/login';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.getUserDetails();
  }

  private getUserDetails() {
    let logindetails = {
      email: 'bilalaga420@gmail.com',
      password: 'Bilal@123',
    };
    this.billingService.getLoginDetails(logindetails).subscribe((res) => {
      console.log('User Response done', res);
    });
  }
}
