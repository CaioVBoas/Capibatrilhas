const challengeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do desafio',
    },
    title: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      description: 'Título do desafio',
    },
    description: {
      type: 'string',
      minLength: 10,
      maxLength: 500,
      description: 'Descrição do desafio',
    },
    theme: {
      type: 'string',
      minLength: 3,
      description: 'Tema do desafio',
    },
    conclusionCriteria: {
      type: 'string',
      description: 'Critério de conclusão do desafio',
    },
    location: {
      type: 'string',
      description: 'Local do desafio',
    },
    rewards: {
      type: 'integer',
      description: 'Recompensa do desafio',
    },
    isActive: {
      type: 'boolean',
      default: true,
      description: 'Se o desafio está ativo',
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
  required: ['title', 'description', 'theme', 'conclusionCriteria', 'location', 'rewards'],
};

const challengeCreateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    theme: { type: 'string', minLength: 3 },
    conclusionCriteria: { type: 'string' },
    location: { type: 'string' },
    rewards: { type: 'integer' },
    isActive: { type: 'boolean', default: true },
  },
  required: ['title', 'description', 'theme', 'conclusionCriteria', 'location', 'rewards'],
};

const challengeUpdateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    theme: { type: 'string', minLength: 3 },
    conclusionCriteria: { type: 'string' },
    location: { type: 'string' },
    rewards: { type: 'integer' },
    isActive: { type: 'boolean' },
  },
};

export default challengeSchema;
export { challengeCreateSchema, challengeUpdateSchema };
