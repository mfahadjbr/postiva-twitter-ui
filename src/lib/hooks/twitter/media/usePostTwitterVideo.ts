"use client";
import { useCallback, useReducer } from 'react'
import { useAuthContext } from '@/lib/hooks/auth/AuthContext'
import { postTwitterVideo } from '../api/twitterApi'
import { mediaReducer, initialMediaState } from './reducers/mediaReducer'
import type { PostVideoResponse } from './types/mediaTypes'

export default function usePostTwitterVideo() {
  const { getAuthHeaders } = useAuthContext()
  const [state, dispatch] = useReducer(mediaReducer<PostVideoResponse>, initialMediaState<PostVideoResponse>())

  const submit = useCallback(async (payload: { file: File; title?: string }) => {
    dispatch({ type: 'SUBMIT_START' })
    try {
      const headers = getAuthHeaders()
      const form = new FormData()
      form.append('video', payload.file)
      if (payload.title) form.append('title', payload.title)
      const res = await postTwitterVideo(form, headers)
      dispatch({ type: 'SUBMIT_SUCCESS', payload: res.data as PostVideoResponse })
    } catch (e: any) {
      dispatch({ type: 'SUBMIT_ERROR', payload: e?.message || 'Failed to post video' })
    }
  }, [getAuthHeaders])

  return {
    ...state,
    submit,
    reset: () => dispatch({ type: 'RESET' }),
  }
}
