export interface AuthState {
  isAuthenticated: boolean;
  message: string | null;
  error: string | null;
  user: { email: string } | null;
}

export interface RootState {
  auth: AuthState
}
