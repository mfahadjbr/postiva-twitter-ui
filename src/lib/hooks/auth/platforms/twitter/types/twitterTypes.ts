export interface TwitterAuthState {
  isLoading: boolean;
  error: string | null;
  authUrl: string | null;
  success: boolean;
}

export interface TwitterCreateTokenResponse {
  success: boolean;
  message: string;
  data?: {
    success?: boolean;
    message?: string;
    user_id?: string;
    auth_url?: string;
    instructions?: string;
  };
}

export type TwitterAuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_AUTH_URL'; payload: string | null }
  | { type: 'SET_SUCCESS'; payload: boolean };
