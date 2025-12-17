const completedChallengeResponse = {
  create: {
    201: {
      description: 'Desafio marcado como completado',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/completedChallenge',
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
      description: 'Dados do desafio completado',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/completedChallenge',
          },
        },
      },
    },
    404: {
      description: 'Desafio completado não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de desafios completados',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/completedChallenge',
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
      description: 'Desafio completado atualizado',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/completedChallenge',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Desafio completado não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Desafio completado deletado',
    },
    404: {
      description: 'Desafio completado não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default completedChallengeResponse;
