"use client";

import { useCallback, useReducer } from 'react';
import { api } from '@/lib/hooks/auth/authSimple/authApi';
import { STORAGE_KEYS } from '@/lib/hooks/auth/authSimple/authConstants';
import { DEBUG_LOGS } from '@/lib/config/appConfig';
import { initialTwitterState, twitterReducer } from './Reducers/twitterReducer';
import type { TwitterCreateTokenResponse } from './types/twitterTypes';

export default function useTwitterAuth() {
  const [state, dispatch] = useReducer(twitterReducer, initialTwitterState);

  const initiateTwitterConnect = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    dispatch({ type: 'SET_AUTH_URL', payload: null });
    dispatch({ type: 'SET_SUCCESS', payload: false });

    try {
      const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) {
        throw new Error('You must be logged in to connect Twitter');
      }

      const res = await api.post<TwitterCreateTokenResponse>(
        '/twitter/create-token',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (DEBUG_LOGS) console.log('🐦 Twitter create-token response:', res.data);

      const authUrl = res.data?.data?.auth_url;
      if (res.data.success && authUrl) {
        dispatch({ type: 'SET_AUTH_URL', payload: authUrl });
        dispatch({ type: 'SET_SUCCESS', payload: true });

        const popupWidth = 640;
        const popupHeight = 780;
        const left = Math.max(0, (window.screenX || window.screenLeft || 0) + (window.outerWidth - popupWidth) / 2);
        const top = Math.max(0, (window.screenY || window.screenTop || 0) + (window.outerHeight - popupHeight) / 2);
        const features = `popup=yes,toolbar=no,menubar=no,location=yes,status=no,scrollbars=yes,resizable=yes,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;

        const popup = window.open(authUrl, 'twitter_oauth_popup', features);
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          if (DEBUG_LOGS) console.warn('Popup blocked; redirecting current tab to Twitter');
          window.location.href = authUrl;
        } else {
          try { popup.focus(); } catch {}
        }
      } else {
        throw new Error(res.data?.message || 'Failed to get Twitter auth URL');
      }
    } catch (err: any) {
      const message = err?.message || 'Failed to initiate Twitter auth';
      dispatch({ type: 'SET_ERROR', payload: message });
      if (DEBUG_LOGS) console.error('❌ Twitter connect error:', err);
      throw err;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  return {
    ...state,
    initiateTwitterConnect,
  };
}
