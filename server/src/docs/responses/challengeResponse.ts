const challengeResponse = {
  create: {
    201: {
      description: 'Desafio criado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/challenge',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  get: {
    200: {
      description: 'Dados do desafio',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/challenge',
          },
        },
      },
    },
    404: {
      description: 'Desafio não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de desafios',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/challenge',
            },
          },
        },
      },
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  update: {
    200: {
      description: 'Desafio atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/challenge',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Desafio não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Desafio deletado com sucesso',
    },
    404: {
      description: 'Desafio não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default challengeResponse;
