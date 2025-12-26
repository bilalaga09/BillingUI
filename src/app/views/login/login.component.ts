import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BaseComponent } from '../base/base-component';
import * as NotificationActions from '../../core/store/notification/notification.actions';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  isLoading = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private notificationStore: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initialize the login form with validators
   */
  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Get form control for template validation
   */
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  /**
   * Toggle password visibility
   */
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  /**
   * Handle login form submission
   */
  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const loginDetails = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService.getLoginDetails(loginDetails).subscribe(
      (res) => {
        console.log('Login successful:', res);
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoading = false;
        
        this.router.navigate(['/home']);
      },
      (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Login failed';
      }
    );
  }
}
