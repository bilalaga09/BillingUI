import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = 'https://localhost:7053/api';
  private readonly http = inject(HttpClient);

  public getCustomers(params: {
    page: number;
    pageSize: number;
    filter?: string;
  }): Observable<{ items: any[]; total: number }> {
    const { page, pageSize, filter } = params;
    const q = `?page=${page}&pageSize=${pageSize}${filter ? `&filter=${encodeURIComponent(filter)}` : ''}`;
    return this.http.get<{ items: any[]; total: number }>(`${this.baseUrl}/Customer${q}`);
  }

  public deleteCustomer(id: string | number) {
    return this.http.delete(`${this.baseUrl}/Customer/${id}`);
  }
}
