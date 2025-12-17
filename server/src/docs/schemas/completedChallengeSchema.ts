const completedChallengeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do desafio completado',
    },
    userId: {
      type: 'integer',
      description: 'ID do usuário que completou',
    },
    challengeId: {
      type: 'integer',
      description: 'ID do desafio',
    },
    trailId: {
      type: 'integer',
      description: 'ID da trilha',
    },
    rewardsEarned: {
      type: 'integer',
      minimum: 0,
      description: 'Recompensas ganhas',
    },
    user: {
      type: 'object',
      description: 'Dados do usuário',
    },
    challenge: {
      type: 'object',
      description: 'Dados do desafio',
    },
    trail: {
      type: 'object',
      description: 'Dados da trilha',
    },
    completedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de conclusão',
    },
  },
  required: ['userId', 'challengeId', 'trailId', 'rewardsEarned'],
};

const completedChallengeCreateSchema = {
  type: 'object',
  properties: {
    userId: { type: 'integer', minimum: 1 },
    challengeId: { type: 'integer', minimum: 1 },
    trailId: { type: 'integer', minimum: 1 },
    rewardsEarned: { type: 'integer', minimum: 0 },
  },
  required: ['userId', 'challengeId', 'trailId', 'rewardsEarned'],
};

const completedChallengeUpdateSchema = {
  type: 'object',
  properties: {
    rewardsEarned: { type: 'integer', minimum: 0 },
  },
};

export default completedChallengeSchema;
export { completedChallengeCreateSchema, completedChallengeUpdateSchema };
