const walletTransactionResponse = {
  create: {
    201: {
      description: 'Transação criada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/walletTransaction',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de transações',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/walletTransaction',
            },
          },
        },
      },
    },
    401: {
      description: 'Não autorizado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  get: {
    200: {
      description: 'Dados da transação',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/walletTransaction',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Transação não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  update: {
    200: {
      description: 'Transação atualizada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/walletTransaction',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Transação não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Transação deletada com sucesso',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Transação não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  listByUser: {
    200: {
      description: 'Lista de transações do usuário',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/walletTransaction',
            },
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default walletTransactionResponse;
