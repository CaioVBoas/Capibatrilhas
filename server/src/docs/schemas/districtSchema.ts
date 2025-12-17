const districtSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do bairro em destaque',
    },
    name: {
      type: 'string',
      minLength: 3,
      description: 'Nome do bairro',
    },
    location: {
      type: 'string',
      minLength: 5,
      description: 'Localização detalhada',
    },
    bonusScore: {
      type: 'integer',
      minimum: 1,
      description: 'Pontuação bônus',
    },
    description: {
      type: 'string',
      minLength: 10,
      maxLength: 500,
      description: 'Descrição do bairro',
    },
    tags: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
      description: 'Tags de categorização',
    },
    isActive: {
      type: 'boolean',
      default: true,
      description: 'Se está ativo',
    },
    urlImage: {
      type: 'string',
      format: 'uri',
      description: 'URL da imagem',
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
  required: ['name', 'location', 'bonusScore', 'description', 'tags'],
};

const districtCreateSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3 },
    location: { type: 'string', minLength: 5 },
    bonusScore: { type: 'integer', minimum: 1 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    tags: { type: 'array', items: { type: 'string' }, minItems: 1 },
    isActive: { type: 'boolean', default: true },
    urlImage: { type: 'string', format: 'uri' },
  },
  required: ['name', 'location', 'bonusScore', 'description', 'tags'],
};

const districtUpdateSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 3 },
    location: { type: 'string', minLength: 5 },
    bonusScore: { type: 'integer', minimum: 1 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    tags: { type: 'array', items: { type: 'string' }, minItems: 1 },
    isActive: { type: 'boolean' },
    urlImage: { type: 'string', format: 'uri' },
  },
};

export default districtSchema;
export { districtCreateSchema, districtUpdateSchema };
