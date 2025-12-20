import api from './api';

export async function login(email: string, password: string) {
  try {
    const response = await api.post('/sessions', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  } 
}
