const trailChallengeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único da associação trilha-desafio',
    },
    trailId: {
      type: 'integer',
      description: 'ID da trilha',
    },
    challengeId: {
      type: 'integer',
      description: 'ID do desafio',
    },
    challengeOrder: {
      type: 'integer',
      minimum: 1,
      description: 'Ordem do desafio na trilha',
    },
    trail: {
      type: 'object',
      description: 'Dados da trilha associada',
    },
    challenge: {
      type: 'object',
      description: 'Dados do desafio associado',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de criação',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de atualização',
    },
  },
  required: ['trailId', 'challengeId', 'challengeOrder'],
};

const trailChallengeCreateSchema = {
  type: 'object',
  properties: {
    trailId: { type: 'integer', minimum: 1 },
    challengeId: { type: 'integer', minimum: 1 },
    challengeOrder: { type: 'integer', minimum: 1 },
  },
  required: ['trailId', 'challengeId', 'challengeOrder'],
};

const trailChallengeUpdateSchema = {
  type: 'object',
  properties: {
    trailId: { type: 'integer', minimum: 1 },
    challengeId: { type: 'integer', minimum: 1 },
    challengeOrder: { type: 'integer', minimum: 1 },
  },
};

export default trailChallengeSchema;
export { trailChallengeCreateSchema, trailChallengeUpdateSchema };
