import type { TwitterTweetsEnvelope, TwitterTweetsState } from '../types/tweetsTypes'

export const initialTweetsState: TwitterTweetsState = {
  isLoading: false,
  error: null,
  data: null,
}

export type TweetsAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: TwitterTweetsEnvelope }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'RESET' }

export function tweetsReducer(state: TwitterTweetsState, action: TweetsAction): TwitterTweetsState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, data: action.payload }
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, error: action.payload }
    case 'RESET':
      return { ...initialTweetsState }
    default:
      return state
  }
}
