const userSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do usuário',
    },
    name: {
      type: 'string',
      minLength: 2,
      description: 'Nome do usuário',
    },
    phone: {
      type: 'string',
      pattern: '^\\d{11}$',
      description: 'Telefone (11 dígitos)',
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'Email do usuário',
    },
    password: {
      type: 'string',
      format: 'password',
      minLength: 8,
      description: 'Senha (mínimo 8 caracteres)',
    },
    cpf: {
      type: 'string',
      pattern: '^\\d{11}$',
      description: 'CPF (11 dígitos)',
    },
    level: {
      type: 'integer',
      default: 1,
      description: 'Nível do usuário',
    },
    urlImage: {
      type: 'string',
      format: 'uri',
      description: 'URL da imagem de perfil',
    },
    birthdate: {
      type: 'string',
      pattern: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$',
      description: 'Data de nascimento (AAAA-MM-DD)',
    },
    zipCode: {
      type: 'string',
      pattern: '^\\d{5}-?\\d{3}$',
      description: 'CEP',
    },
    state: {
      type: 'string',
      maxLength: 2,
      description: 'Estado (UF)',
    },
    city: {
      type: 'string',
      description: 'Cidade',
    },
    district: {
      type: 'string',
      description: 'Bairro',
    },
    street: {
      type: 'string',
      description: 'Rua',
    },
    complement: {
      type: 'string',
      description: 'Complemento',
    },
    number: {
      type: 'string',
      description: 'Número',
    },
    isAdmin: {
      type: 'boolean',
      default: false,
      description: 'Se é administrador',
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
  required: ['name', 'email', 'password', 'cpf'],
};

const userCreateSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 2 },
    phone: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8 },
    cpf: { type: 'string' },
    urlImage: { type: 'string', format: 'uri' },
    birthdate: { type: 'string' },
    zipCode: { type: 'string' },
    state: { type: 'string' },
    city: { type: 'string' },
    district: { type: 'string' },
    street: { type: 'string' },
    complement: { type: 'string' },
    number: { type: 'string' },
  },
  required: ['name', 'email', 'password', 'cpf'],
};

const userUpdateSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 2 },
    phone: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 8 },
    urlImage: { type: 'string', format: 'uri' },
    birthdate: { type: 'string' },
    zipCode: { type: 'string' },
    state: { type: 'string' },
    city: { type: 'string' },
    district: { type: 'string' },
    street: { type: 'string' },
    complement: { type: 'string' },
    number: { type: 'string' },
  },
};

export default userSchema;
export { userCreateSchema, userUpdateSchema };
