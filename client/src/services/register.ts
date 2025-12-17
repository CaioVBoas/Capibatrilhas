import api from './api';

export interface InitialInfoUser {
  name: string,
  cpf: string,
  email: string,
  password: string,
}

export async function register(user: InitialInfoUser) {
  try {
    const response = await api.post('/user', { user });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}