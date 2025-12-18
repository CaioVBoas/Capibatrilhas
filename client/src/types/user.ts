export interface User {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone?: string;
  level: number;
  points: number;
  isAdmin: boolean;
  urlImage?: string;
  birthdate?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  district?: string;
  street?: string;
  number?: string;
  complement?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  data: {
    user: User;
    accessToken: string;
  };
  message: string;
}
