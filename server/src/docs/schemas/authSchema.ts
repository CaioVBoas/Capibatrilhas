const loginSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      description: 'Email do usuário',
    },
    password: {
      type: 'string',
      format: 'password',
      description: 'Senha do usuário',
    },
  },
  required: ['email', 'password'],
};

const loginResponseSchema = {
  type: 'object',
  properties: {
    loggedUser: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        cpf: { type: 'string' },
        level: { type: 'integer' },
        urlImage: { type: 'string' },
        birthdate: { type: 'string' },
        zipCode: { type: 'string' },
        state: { type: 'string' },
        city: { type: 'string' },
        district: { type: 'string' },
        street: { type: 'string' },
        complement: { type: 'string' },
        number: { type: 'string' },
        isAdmin: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
    },
    accessToken: {
      type: 'string',
      description: 'JWT access token',
    },
  },
};

export { loginSchema, loginResponseSchema };
