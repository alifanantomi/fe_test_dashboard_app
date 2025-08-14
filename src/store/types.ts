export interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}

export interface RootState {
  auth: AuthState
}
