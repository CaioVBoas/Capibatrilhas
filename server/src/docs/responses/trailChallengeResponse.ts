const trailChallengeResponse = {
  create: {
    201: {
      description: 'Desafio da trilha criado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailChallenge',
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
      description: 'Dados do desafio da trilha',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailChallenge',
          },
        },
      },
    },
    404: {
      description: 'Desafio da trilha não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de desafios da trilha',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/trailChallenge',
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
      description: 'Desafio da trilha atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailChallenge',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Desafio da trilha não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Desafio da trilha deletado com sucesso',
    },
    404: {
      description: 'Desafio da trilha não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default trailChallengeResponse;
