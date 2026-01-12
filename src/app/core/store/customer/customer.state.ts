export interface Customer {
  id: number;
  tenantId: number;
  name: string;
  phone: string;
  email: string;
  address?: string;
  gstNumber?: string;
  createdAt?: string; 
  active: string;
} 

export interface CustomerState {
  customers: Customer[];
  totalCount: number;
  loading: boolean;
  error: any | null;
}
