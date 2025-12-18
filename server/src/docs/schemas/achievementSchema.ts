const achievementSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único da conquista',
    },
    title: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      description: 'Título da conquista',
    },
    description: {
      type: 'string',
      minLength: 10,
      maxLength: 500,
      description: 'Descrição da conquista',
    },
    criteria: {
      type: 'string',
      description: 'Critérios para desbloquear a conquista',
    },
    isActive: {
      type: 'boolean',
      default: false,
      description: 'Se a conquista está ativa',
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
  required: ['title', 'description', 'criteria'],
};

const achievementCreateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    criteria: { type: 'string' },
    isActive: { type: 'boolean', default: false },
  },
  required: ['title', 'description', 'criteria'],
};

const achievementUpdateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    criteria: { type: 'string' },
    isActive: { type: 'boolean' },
  },
};

export default achievementSchema;
export { achievementCreateSchema, achievementUpdateSchema };
