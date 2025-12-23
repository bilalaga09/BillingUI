import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  baseUrl = 'https://localhost:7053/api';
  private readonly http = inject(HttpClient);

  public getLoginDetails(login: Login): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/User/login`,login);
  }
}
