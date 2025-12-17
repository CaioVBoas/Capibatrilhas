const agendaSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do evento',
    },
    title: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      description: 'Título do evento',
    },
    description: {
      type: 'string',
      minLength: 10,
      maxLength: 500,
      description: 'Descrição do evento',
    },
    location: {
      type: 'string',
      minLength: 5,
      maxLength: 200,
      description: 'Local do evento',
    },
    eventDate: {
      type: 'string',
      format: 'date-time',
      description: 'Data de início do evento',
    },
    endDate: {
      type: 'string',
      format: 'date-time',
      description: 'Data de término do evento',
    },
    category: {
      type: 'string',
      description: 'Categoria do evento',
    },
    urlImage: {
      type: 'string',
      format: 'uri',
      description: 'URL da imagem do evento',
    },
    urlExternal: {
      type: 'string',
      format: 'uri',
      description: 'URL externa para mais informações',
    },
    isActive: {
      type: 'boolean',
      default: true,
      description: 'Se o evento está ativo',
    },
    isFeatured: {
      type: 'boolean',
      default: false,
      description: 'Se o evento está em destaque',
    },
    tags: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
      description: 'Tags de categorização',
    },
    organizer: {
      type: 'string',
      description: 'Organizador do evento',
    },
    value: {
      type: 'string',
      description: 'Valor do evento (gratuito ou preço)',
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
  required: ['title', 'description', 'location', 'eventDate', 'category', 'tags'],
};

const agendaCreateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    location: { type: 'string', minLength: 5, maxLength: 200 },
    eventDate: { type: 'string', format: 'date-time' },
    endDate: { type: 'string', format: 'date-time' },
    category: { type: 'string' },
    urlImage: { type: 'string', format: 'uri' },
    urlExternal: { type: 'string', format: 'uri' },
    isActive: { type: 'boolean', default: true },
    isFeatured: { type: 'boolean', default: false },
    tags: { type: 'array', items: { type: 'string' }, minItems: 1 },
    organizer: { type: 'string' },
    value: { type: 'string' },
  },
  required: ['title', 'description', 'location', 'eventDate', 'category', 'tags'],
};

const agendaUpdateSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 3, maxLength: 100 },
    description: { type: 'string', minLength: 10, maxLength: 500 },
    location: { type: 'string', minLength: 5, maxLength: 200 },
    eventDate: { type: 'string', format: 'date-time' },
    endDate: { type: 'string', format: 'date-time' },
    category: { type: 'string' },
    urlImage: { type: 'string', format: 'uri' },
    urlExternal: { type: 'string', format: 'uri' },
    isActive: { type: 'boolean' },
    isFeatured: { type: 'boolean' },
    tags: { type: 'array', items: { type: 'string' }, minItems: 1 },
    organizer: { type: 'string' },
    value: { type: 'string' },
  },
};

export default agendaSchema;
export { agendaCreateSchema, agendaUpdateSchema };
