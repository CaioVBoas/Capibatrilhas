import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { serverApi } from 'services/api';
import { User } from 'types';

interface LoginResponse {
  data: {
    user?: User;
    loggedUser?: User;
    accessToken: string;
  };
  message: string;
}

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
          const response = await serverApi.post<LoginResponse>('/sessions', {
            email: credentials?.email,
            password: credentials?.password
          });

          const data = response.data.data;
          const user = data.user || data.loggedUser;
          const accessToken = data.accessToken;

          if (user && accessToken) {
            return {
              ...user,
              accessToken
            } as User & { accessToken: string };
          }

          return null;
        } catch {
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
    maxAge: 5 * 24 * 60 * 60,
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
