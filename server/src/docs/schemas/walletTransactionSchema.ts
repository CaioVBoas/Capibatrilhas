const walletTransactionSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único da transação',
    },
    userId: {
      type: 'integer',
      description: 'ID do usuário',
    },
    amount: {
      type: 'integer',
      description: 'Valor da transação (positivo para créditos, negativo para débitos)',
    },
    description: {
      type: 'string',
      description: 'Descrição da transação',
    },
    transactionDate: {
      type: 'string',
      format: 'date-time',
      description: 'Data da transação',
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
  required: ['userId', 'amount', 'description'],
};

const walletTransactionCreateSchema = {
  type: 'object',
  properties: {
    userId: { type: 'integer' },
    amount: { type: 'integer' },
    description: { type: 'string' },
    transactionDate: { type: 'string', format: 'date-time' },
  },
  required: ['userId', 'amount', 'description'],
};

const walletTransactionUpdateSchema = {
  type: 'object',
  properties: {
    amount: { type: 'integer' },
    description: { type: 'string' },
    transactionDate: { type: 'string', format: 'date-time' },
  },
};

export default walletTransactionSchema;
export { walletTransactionCreateSchema, walletTransactionUpdateSchema };
