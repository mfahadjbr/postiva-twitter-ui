import axios from 'axios'
import { useCallback } from 'react'
import { useAuthContext } from '@/lib/hooks/auth/AuthContext'

export function useTwitterConnectionStatus() {
  const { getAuthHeaders } = useAuthContext()

  // Returns true if user has connected their Twitter account
  const checkTwitterConnection = useCallback(async () => {
    try {
      const headers = getAuthHeaders()
      const res = await axios.get('https://backend.postsiva.com/twitter/get-token', {
        headers,
      })
      return !!(res.data?.success && res.data?.data?.access_token)
    } catch (error: unknown) {
      return false
    }
  }, [getAuthHeaders])

  return { checkTwitterConnection }
}
