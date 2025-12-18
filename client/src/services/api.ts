import axios from 'axios';
import { getSession } from 'next-auth/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const session = await getSession();

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
  }

  return config;
});


export const serverApi = axios.create({
  baseURL: API_URL
});

export default api;
