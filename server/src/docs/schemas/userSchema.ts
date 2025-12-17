const userSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      format: 'password',
    },
  },
  required: ['name', 'email', 'password'],
};

// Schema for creating a new user (POST /user)
const userCreateSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      pattern: '^[\\p{L}\\s\'-]+$',
    },
    phone: {
      type: 'string',
      pattern: '^\\d{11}$',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      format: 'password',
      minLength: 8,
    },
    cpf: {
      type: 'string',
      pattern: '^\\d{11}$',
    },
    urlImage: {
      type: 'string',
      format: 'uri',
    },
    birthDate: {
      type: 'string',
      pattern: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$',
    },
    zipCode: {
      type: 'string',
      pattern: '^\\d{5}-?\\d{3}$',
    },
    state: {
      type: 'string',
      minLength: 2,
      maxLength: 2,
      pattern: '^[A-Z]{2}$',
    },
    city: {
      type: 'string',
      minLength: 2,
      pattern: '^[\\p{L}\\s]+$',
    },
    district: {
      type: 'string',
      minLength: 2,
    },
    street: {
      type: 'string',
      minLength: 2,
    },
    number: {
      type: 'string',
      minLength: 1,
    },
    complement: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'password', 'cpf'],
};

// Schema for updating user profile (PATCH /user/{userId})
const userUpdateSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      pattern: '^[\\p{L}\\s\'-]+$',
    },
    phone: {
      type: 'string',
      pattern: '^\\d{11}$',
    },
    urlImage: {
      type: 'string',
      format: 'uri',
    },
    birthDate: {
      type: 'string',
      pattern: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$',
    },
    zipCode: {
      type: 'string',
      pattern: '^\\d{5}-?\\d{3}$',
    },
    state: {
      type: 'string',
      minLength: 2,
      maxLength: 2,
      pattern: '^[A-Z]{2}$',
    },
    city: {
      type: 'string',
      minLength: 2,
      pattern: '^[\\p{L}\\s]+$',
    },
    district: {
      type: 'string',
      minLength: 2,
    },
    street: {
      type: 'string',
      minLength: 2,
    },
    number: {
      type: 'string',
      minLength: 1,
    },
    complement: {
      type: 'string',
    },
  },
};

export default userSchema;
export { userCreateSchema, userUpdateSchema };
