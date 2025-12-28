export interface Customer {
  id: string | number;
  name: string;
  email?: string;
  phone?: string;
}

export interface CustomerState {
  customers: Customer[];
  totalCount: number;
  loading: boolean;
  error: any | null;
}
