import api from './api';

// API response interfaces
export interface ApiUser {
  id: number;
  name: string;
  email: string;
  level: number;
  urlImage?: string;
  points?: number;
}

export interface ApiAchievement {
  id: number;
  achievement: {
    title: string;
    description: string;
  };
}

export interface ApiCompletedChallenge {
  id: number;
  userId: number;
  challenge?: {
    title: string;
  };
  completedAt?: string;
  rewardsEarned?: number;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  value?: number;
  type: 'reward' | 'info';
}

export interface UserProfile {
  name: string;
  email: string;
  level: number;
  avatarUrl?: string;
  stats: {
    capibas: number;
    trilhas: number;
    desafios: number;
    diasSeguidos: number;
  };
  achievements: Achievement[];
  recentActivity: Activity[];
}

const formatRelativeTime = (isoString?: string) => {
  if (!isoString) return 'Data desconhecida';
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long'
    }).format(date);
  } catch {
    return 'Data inválida';
  }
};

export const getProfileData = async (
  userId: number
): Promise<UserProfile | null> => {
  if (!userId) {
    console.error('❌ ID do usuário não fornecido para o profile service.');
    return null;
  }

  try {
    console.log(`🔄 Buscando dados para o usuário ID: ${userId}...`);
    const [userReq, achievementsReq, historyReq] = await Promise.allSettled([
      api.get<ApiUser>(`/user/${userId}`),
      api.get<ApiAchievement[]>(`/user-achievement/${userId}`),
      api.get<ApiCompletedChallenge[]>(`/completed-challenge`)
    ]);

    if (userReq.status !== 'fulfilled') {
      console.error('❌ Falha ao buscar usuário:', userReq.reason);
      return null;
    }
    // The API returns the user object directly
    const userData: ApiUser = userReq.value.data;

    let achievementsList: ApiAchievement[] = [];
    if (achievementsReq.status === 'fulfilled') {
      achievementsList = achievementsReq.value.data;
    }

    let historyList: ApiCompletedChallenge[] = [];
    if (historyReq.status === 'fulfilled') {
      const allHistory = historyReq.value.data;
      historyList = allHistory.filter(
        (h: ApiCompletedChallenge) => h.userId === userId
      );
    }

    return {
      name: userData.name || 'Usuário',
      email: userData.email || '',
      level: userData.level || 1,
      avatarUrl: userData.urlImage,
      stats: {
        capibas: userData.points || 0,
        trilhas: 0, // TODO: Integrate with trail data if available
        desafios: historyList.length,
        diasSeguidos: 0 // TODO: Integrate streak logic if available
      },
      achievements: achievementsList.map((item) => ({
        id: item.id,
        title: item.achievement?.title || 'Conquista',
        description: item.achievement?.description || '',
        completed: true
      })),
      recentActivity: historyList
        .map((item) => ({
          id: item.id,
          title: `Desafio "${item.challenge?.title || 'Desconhecido'}" completado`,
          date: formatRelativeTime(item.completedAt),
          value: Number(item.rewardsEarned || 0),
          type: 'reward' as const
        }))
        .slice(0, 5)
    };
  } catch (error) {
    console.error('❌ Erro crítico no profile service:', error);
    return null;
  }
};
