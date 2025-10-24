import type { MediaState } from '../types/mediaTypes'

export const initialMediaState = <T>(): MediaState<T> => ({
  isSubmitting: false,
  error: null,
  result: null,
})

export type MediaAction<T> =
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS'; payload: T }
  | { type: 'SUBMIT_ERROR'; payload: string }
  | { type: 'RESET' }

export function mediaReducer<T>(state: MediaState<T>, action: MediaAction<T>): MediaState<T> {
  switch (action.type) {
    case 'SUBMIT_START':
      return { ...state, isSubmitting: true, error: null }
    case 'SUBMIT_SUCCESS':
      return { ...state, isSubmitting: false, result: action.payload }
    case 'SUBMIT_ERROR':
      return { ...state, isSubmitting: false, error: action.payload }
    case 'RESET':
      return { ...initialMediaState<T>() }
    default:
      return state
  }
}
