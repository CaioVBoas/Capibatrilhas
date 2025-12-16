const trailParticipationSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único da participação',
    },
    userId: {
      type: 'integer',
      description: 'ID do usuário',
    },
    trailId: {
      type: 'integer',
      description: 'ID da trilha',
    },
    progress: {
      type: 'number',
      minimum: 0,
      maximum: 100,
      default: 0,
      description: 'Progresso na trilha (0-100%)',
    },
    isCompleted: {
      type: 'boolean',
      default: false,
      description: 'Se a trilha foi completada',
    },
    user: {
      type: 'object',
      description: 'Dados do usuário',
    },
    trail: {
      type: 'object',
      description: 'Dados da trilha',
    },
    joinedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de entrada na trilha',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de atualização',
    },
  },
  required: ['userId', 'trailId'],
};

const trailParticipationCreateSchema = {
  type: 'object',
  properties: {
    userId: { type: 'integer', minimum: 1 },
    trailId: { type: 'integer', minimum: 1 },
    progress: { type: 'number', minimum: 0, maximum: 100 },
    isCompleted: { type: 'boolean' },
  },
  required: ['userId', 'trailId'],
};

const trailParticipationUpdateSchema = {
  type: 'object',
  properties: {
    userId: { type: 'integer', minimum: 1 },
    trailId: { type: 'integer', minimum: 1 },
    progress: { type: 'number', minimum: 0, maximum: 100 },
    isCompleted: { type: 'boolean' },
  },
};

export default trailParticipationSchema;
export { trailParticipationCreateSchema, trailParticipationUpdateSchema };
