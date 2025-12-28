export interface UserState {
  user: User | null;
  loading: boolean;
}

export interface User {
  id: string;
  email: string;
  userName: string;
  roleId: number;
  tenantId: number;
}