import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CustomerComponent } from './views/customer/customer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from './shared/shared.module';

// NgRx Store
import { appReducers } from './core/store';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { loggerMetaReducer } from './core/store/meta-reducers/logger.reducer';
import { environment } from '../environments/environment';
import { UserEffects } from './core/store/user/user.effect';
import { CustomerEffects } from './core/store/customer/customer.effect';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer[] = !environment.production
  ? [loggerMetaReducer]
  : [];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    SharedModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, CustomerEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
