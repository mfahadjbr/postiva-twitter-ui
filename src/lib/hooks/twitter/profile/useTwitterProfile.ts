"use client";
import { useCallback, useEffect, useReducer } from 'react'
import { useAuthContext } from '@/lib/hooks/auth/AuthContext'
import { getTwitterProfile } from '../api/twitterApi'
import { profileReducer, initialProfileState } from './reducers/profileReducer'
import type { TwitterProfileEnvelope } from './types/profileTypes'

export default function useTwitterProfile(defaults: { refresh?: boolean } = {}) {
  const { getAuthHeaders } = useAuthContext()
  const [state, dispatch] = useReducer(profileReducer, initialProfileState)
  const { refresh = false } = defaults

  const fetchProfile = useCallback(async (opts?: { refresh?: boolean }) => {
    dispatch({ type: 'FETCH_START' })
    try {
      const headers = getAuthHeaders()
      const res = await getTwitterProfile(opts?.refresh ?? refresh, headers)
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data as TwitterProfileEnvelope })
    } catch (e: any) {
      dispatch({ type: 'FETCH_ERROR', payload: e?.message || 'Failed to load profile' })
    }
  }, [getAuthHeaders, refresh])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  return {
    ...state,
    refetch: fetchProfile,
    reset: () => dispatch({ type: 'RESET' }),
  }
}
