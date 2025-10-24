"use client";
import { useCallback, useReducer } from 'react'
import { useAuthContext } from '@/lib/hooks/auth/AuthContext'
import { postTwitterImage } from '../api/twitterApi'
import { mediaReducer, initialMediaState } from './reducers/mediaReducer'
import type { PostImageResponse } from './types/mediaTypes'

export default function usePostTwitterImage() {
  const { getAuthHeaders } = useAuthContext()
  const [state, dispatch] = useReducer(mediaReducer<PostImageResponse>, initialMediaState<PostImageResponse>())

  const submit = useCallback(async (payload: { file: File; title?: string }) => {
    dispatch({ type: 'SUBMIT_START' })
    try {
      const headers = getAuthHeaders()
      const form = new FormData()
      form.append('media', payload.file)
      if (payload.title) form.append('title', payload.title)
      const res = await postTwitterImage(form, headers)
      dispatch({ type: 'SUBMIT_SUCCESS', payload: res.data as PostImageResponse })
    } catch (e: any) {
      dispatch({ type: 'SUBMIT_ERROR', payload: e?.message || 'Failed to post image' })
    }
  }, [getAuthHeaders])

  return {
    ...state,
    submit,
    reset: () => dispatch({ type: 'RESET' }),
  }
}
