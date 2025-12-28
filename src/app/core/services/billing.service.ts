import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { User } from '../store/user/user.state';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  baseUrl = 'https://localhost:7053/api';
  private readonly http = inject(HttpClient);

  public getLoginDetails(login: Login): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/User/login`,login);
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/User/me`);
  }

  public getCustomers(params: {
    page: number;
    pageSize: number;
    filter?: string;
  }): Observable<{ items: any[]; totalCount: number }> {
    const { page, pageSize, filter } = params;
    const q = `?page=${page}&pageSize=${pageSize}${filter ? `&filter=${encodeURIComponent(filter)}` : ''}`;
    return this.http.get<{ items: any[]; totalCount: number }>(`${this.baseUrl}/Customer/getAllCustomers${q}`);
  }

  public deleteCustomer(id: string | number) {
    return this.http.delete(`${this.baseUrl}/Customer/${id}`);
  }
}
