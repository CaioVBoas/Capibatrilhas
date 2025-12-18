import { walletTransactionResponse } from '../responses';

const walletTransactionPath = {
  '/wallet-transaction': {
    post: {
      tags: ['Transação de Carteira'],
      summary: 'Criar transação',
      description: 'Cria uma nova transação na carteira do usuário',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/walletTransactionCreate',
            },
            example: {
              userId: 1,
              amount: 100,
              description: 'Recompensa por completar trilha',
              transactionDate: '2024-01-15T10:30:00Z',
            },
          },
        },
      },
      responses: walletTransactionResponse.create,
    },
    get: {
      tags: ['Transação de Carteira'],
      summary: 'Listar transações',
      description: 'Retorna a lista de todas as transações (requer autenticação)',
      security: [{ bearerAuth: [] }],
      responses: walletTransactionResponse.list,
    },
  },
  '/wallet-transaction/{transactionId}': {
    get: {
      tags: ['Transação de Carteira'],
      summary: 'Buscar transação',
      description: 'Retorna os dados de uma transação pelo ID',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'transactionId',
          description: 'ID da transação',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: walletTransactionResponse.get,
    },
    patch: {
      tags: ['Transação de Carteira'],
      summary: 'Atualizar transação',
      description: 'Atualiza os dados de uma transação',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'transactionId',
          description: 'ID da transação',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/walletTransactionUpdate',
            },
            example: {
              amount: 150,
              description: 'Recompensa atualizada',
            },
          },
        },
      },
      responses: walletTransactionResponse.update,
    },
    delete: {
      tags: ['Transação de Carteira'],
      summary: 'Deletar transação',
      description: 'Remove uma transação do sistema',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'transactionId',
          description: 'ID da transação',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: walletTransactionResponse.delete,
    },
  },
  '/wallet-transaction/user/{userId}': {
    get: {
      tags: ['Transação de Carteira'],
      summary: 'Listar transações do usuário',
      description: 'Retorna todas as transações de um usuário específico',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'userId',
          description: 'ID do usuário',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: walletTransactionResponse.listByUser,
    },
  },
};

export default walletTransactionPath;
