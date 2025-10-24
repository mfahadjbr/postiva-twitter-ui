"use client";
import { useCallback, useEffect, useReducer } from 'react'
import { useAuthContext } from '@/lib/hooks/auth/AuthContext'
import { getTwitterTweets } from '../api/twitterApi'
import { tweetsReducer, initialTweetsState } from './reducers/tweetsReducer'
import type { TwitterTweetsEnvelope } from './types/tweetsTypes'

export default function useTwitterTweets(defaults: { refresh?: boolean; maxResults?: number; nextToken?: string | null } = {}) {
  const { getAuthHeaders } = useAuthContext()
  const [state, dispatch] = useReducer(tweetsReducer, initialTweetsState)
  const { refresh = false, maxResults = 10, nextToken = null } = defaults

  const fetchTweets = useCallback(async (opts?: { refresh?: boolean; maxResults?: number; nextToken?: string | null }) => {
    dispatch({ type: 'FETCH_START' })
    try {
      const headers = getAuthHeaders()
      const res = await getTwitterTweets(
        { refresh: opts?.refresh ?? refresh, maxResults: opts?.maxResults ?? maxResults, nextToken: opts?.nextToken ?? nextToken },
        headers
      )
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data as TwitterTweetsEnvelope })
    } catch (e: any) {
      dispatch({ type: 'FETCH_ERROR', payload: e?.message || 'Failed to load tweets' })
    }
  }, [getAuthHeaders, refresh, maxResults, nextToken])

  useEffect(() => {
    fetchTweets()
  }, [fetchTweets])

  return {
    ...state,
    refetch: fetchTweets,
    reset: () => dispatch({ type: 'RESET' }),
  }
}
