import { Trails } from 'components/featuredTrailCards';

type ApiTrail = {
  id: number;
  title: string;
  description: string;
  theme: string;
  totalRewards: number;
  challenges?: any[];
};

export function adaptTrail(apiTrail: ApiTrail): Trails {
  const totalChallenges = apiTrail.challenges?.length ?? 0;

  return {
    id: apiTrail.id,
    title: apiTrail.title,
    subtitle: apiTrail.description,
    tag: apiTrail.theme,

    type: 'Normal',
    progress: 0,

    challengesQuantity: String(totalChallenges),
    challengesCompleted: '0',

    time: '—',
    prize: apiTrail.totalRewards,

    buttonText: 'Iniciar Trilha',
  };
}