import api from './api';
import axios from 'axios';



export async function register(name: string, cpf: string, email: string, password: string) {
  try {
    const response = await api.post('/user', { name, cpf, email, password });
    return response.data;
  } catch (error) {
    
    if (axios.isAxiosError(error)) {
      
      console.error('Detalhes do Erro do Servidor:', error.response?.data);
      console.error('Status Code:', error.response?.status);
    } else {
      
      console.error('Erro inesperado:', error);
    }
    throw error;
  }
}