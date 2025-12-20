const trailSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único da trilha',
    },
    title: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      description: 'Título da trilha',
    },
    description: {
      type: 'string',
      minLength: 10,
      maxLength: 500,
      description: 'Descrição da trilha',
    },
    theme: {
      type: 'string',
      description: 'Tema da trilha',
    },
    startDate: {
      type: 'string',
      format: 'date-time',
      description: 'Data de início da trilha',
    },
    endDate: {
      type: 'string',
      format: 'date-time',
      description: 'Data de término da trilha',
    },
    totalRewards: {
      type: 'integer',
      minimum: 0,
      description: 'Total de recompensas da trilha',
    },
    isActive: {
      type: 'boolean',
      default: true,
      description: 'Se a trilha está ativa',
    },
    isHighlighted: {
      type: 'boolean',
      default: false,
      description: 'Se a trilha está em destaque',
    },
    ownerId: {
      type: 'integer',
      description: 'ID do proprietário da trilha',
    },
    challenges: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          challengeId: { type: 'integer' },
          challengeOrder: { type: 'integer' },
        },
      },
      description: 'Desafios da trilha',
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
  required: ['title', 'description', 'theme', 'startDate', 'endDate', 'totalRewards'],
};

const trailCreateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    theme: { type: 'string' },
    startDate: { type: 'string', format: 'date-time' },
    endDate: { type: 'string', format: 'date-time' },
    totalRewards: { type: 'integer', minimum: 0 },
    ownerId: { type: 'integer', description: 'ID do proprietário da trilha' },
    challenges: {
      type: 'array',
      items: { type: 'integer' },
      minItems: 1,
      description: 'Array de IDs dos desafios',
    },
  },
  required: ['title', 'description', 'theme', 'startDate', 'endDate', 'totalRewards', 'ownerId', 'challenges'],
};

const trailUpdateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    theme: { type: 'string' },
    startDate: { type: 'string', format: 'date-time' },
    endDate: { type: 'string', format: 'date-time' },
    totalRewards: { type: 'integer', minimum: 0 },
    challenges: {
      type: 'array',
      items: { type: 'integer' },
      description: 'Array de IDs dos desafios',
    },
  },
};

export default trailSchema;
export { trailCreateSchema, trailUpdateSchema };
