import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://localhost:7053/api';
  private readonly http = inject(HttpClient);

  public getLoginDetails(login: Login): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/User/login`, login);
  }
}

