import { TwitterAuthAction, TwitterAuthState } from '../types/twitterTypes'

export const initialTwitterState: TwitterAuthState = {
  isLoading: false,
  error: null,
  authUrl: null,
  success: false,
}

export function twitterReducer(state: TwitterAuthState, action: TwitterAuthAction): TwitterAuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_AUTH_URL':
      return { ...state, authUrl: action.payload }
    case 'SET_SUCCESS':
      return { ...state, success: action.payload }
    default:
      return state
  }
}
