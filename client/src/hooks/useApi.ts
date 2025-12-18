'use client';

import { useCallback } from 'react';
import { useSession } from 'next-auth/react';
import api from 'services/api';
import { AxiosRequestConfig } from 'axios';

export function useApi() {
  const { data: session } = useSession();

  const authFetch = useCallback(
    async <T>(url: string, config?: AxiosRequestConfig) => {
      const headers = {
        ...config?.headers,
        ...(session?.accessToken && {
          Authorization: `Bearer ${session.accessToken}`,
        }),
      };

      return api.request<T>({
        url,
        ...config,
        headers,
      });
    },
    [session?.accessToken]
  );

  const get = useCallback(
    <T>(url: string, config?: AxiosRequestConfig) =>
      authFetch<T>(url, { ...config, method: 'GET' }),
    [authFetch]
  );

  const post = useCallback(
    <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
      authFetch<T>(url, { ...config, method: 'POST', data }),
    [authFetch]
  );

  const put = useCallback(
    <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
      authFetch<T>(url, { ...config, method: 'PUT', data }),
    [authFetch]
  );

  const patch = useCallback(
    <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
      authFetch<T>(url, { ...config, method: 'PATCH', data }),
    [authFetch]
  );

  const del = useCallback(
    <T>(url: string, config?: AxiosRequestConfig) =>
      authFetch<T>(url, { ...config, method: 'DELETE' }),
    [authFetch]
  );

  return {
    get,
    post,
    put,
    patch,
    delete: del,
    authFetch,
  };
}
