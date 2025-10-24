"use client";
import { ReactNode, useEffect } from 'react';
import { useAuthContext } from './AuthContext';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  allowedRoles?: string[];
  redirectTo?: string;
  fallback?: ReactNode;
}

export default function AuthGuard({ children, requireAuth = true, allowedRoles, redirectTo = '/auth/login', fallback }: AuthGuardProps) {
  const { isAuthenticated, isLoading, user } = useAuthContext();
  const router = useRouter();

  // Redirect in an effect to avoid updating Router during render
  useEffect(() => {
    if (!requireAuth) return;
    if (isLoading) return;

    const notAuthed = !isAuthenticated;
    const roleMismatch = allowedRoles && allowedRoles.length > 0 && user && !(allowedRoles as string[]).includes((user as any).role);

    if (notAuthed || roleMismatch) {
      router.replace(redirectTo);
    }
  }, [requireAuth, isLoading, isAuthenticated, allowedRoles, user, redirectTo, router]);

  // While loading or redirecting, render nothing
  if (requireAuth) {
    const roleMismatch = allowedRoles && allowedRoles.length > 0 && user && !(allowedRoles as string[]).includes((user as any).role);
    if (isLoading || !isAuthenticated || roleMismatch) return fallback ?? null;
  }

  return <>{children}</>;
}
