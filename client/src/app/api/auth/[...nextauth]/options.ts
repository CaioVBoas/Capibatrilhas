import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { serverApi } from 'services/api';
import { AuthResponse, User } from 'types';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        try {
          const response = await serverApi.post<AuthResponse>('/sessions', {
            email: credentials?.email,
            password: credentials?.password
          });

          const { user, accessToken } = response.data.data;

          if (user && accessToken) {
            return {
              ...user,
              accessToken
            } as User & { accessToken: string };
          }

          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/'
  },
  session: {
    strategy: 'jwt',
    maxAge: 5 * 24 * 60 * 60, // 5 days (match refresh token)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { accessToken, ...userData } = user as User & { accessToken: string };
        token.user = userData;
        token.accessToken = accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as User;
      session.accessToken = token.accessToken as string;
      return session;
    }
  }
};
