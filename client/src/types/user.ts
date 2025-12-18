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

export interface Challenge {
  id: number;
  title: string;
  description: string;
  theme: string;
  conclusionCriteria: string;
  conclusionToken: string;
  location: string;
  rewards: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TrailChallenge {
  id: number;
  trailId: number;
  challengeId: number;
  challengeOrder: number;
  challenge: Challenge;
}

export interface TrailParticipant {
  id: number;
  userId: number;
  trailId: number;
  progress: number;
  isCompleted: boolean;
  user: {
    id: number;
    name: string;
    urlImage?: string;
  };
}

export interface CompletedChallenge {
  id: number;
  userId: number;
  challengeId: number;
  trailId: number;
  completedAt: string;
  rewardsEarned: number;
  user: {
    id: number;
    name: string;
  };
  challenge: {
    id: number;
    title: string;
  };
}

export interface Trail {
  id: number;
  title: string;
  description: string;
  theme: string;
  startDate: string;
  endDate: string;
  totalRewards: number;
  isActive: boolean;
  isHighlighted: boolean;
  ownerId?: number;
  createdAt: string;
  updatedAt: string;
  challenges?: TrailChallenge[];
  participants?: TrailParticipant[];
  completedChallenges?: CompletedChallenge[];
  owner?: {
    id: number;
    name: string;
    urlImage?: string;
  };
  _count?: {
    participants: number;
    completedChallenges: number;
  };
}

export interface CreateTrailData {
  title: string;
  description: string;
  theme: string;
  startDate: Date;
  endDate: Date;
  totalRewards: number;
  challenges: number[];
  ownerId?: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}
