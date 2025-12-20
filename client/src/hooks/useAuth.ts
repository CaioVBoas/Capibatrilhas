'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from 'types';

interface UseAuthReturn {
  user: User | null;
  userId: number | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated' && !!session?.user;

  const user = session?.user ?? null;
  const userId = user?.id ?? null;
  const accessToken = session?.accessToken ?? null;

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        return { success: false, error: 'Email ou senha inválidos.' };
      }

      return { success: true };
    } catch {
      return { success: false, error: 'Erro ao fazer login. Tente novamente.' };
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return {
    user,
    userId,
    accessToken,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}
