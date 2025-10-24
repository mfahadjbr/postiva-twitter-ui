import type { TwitterProfileEnvelope, TwitterProfileState } from '../types/profileTypes'

export const initialProfileState: TwitterProfileState = {
  isLoading: false,
  error: null,
  data: null,
}

export type ProfileAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: TwitterProfileEnvelope }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'RESET' }

export function profileReducer(state: TwitterProfileState, action: ProfileAction): TwitterProfileState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, data: action.payload }
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload }
    case 'RESET':
      return { ...initialProfileState }
    default:
      return state
  }
}
