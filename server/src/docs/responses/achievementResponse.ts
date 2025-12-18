const achievementResponse = {
  create: {
    201: {
      description: 'Conquista criada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/achievement',
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
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de conquistas',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/achievement',
            },
          },
        },
      },
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  get: {
    200: {
      description: 'Dados da conquista',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/achievement',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Conquista não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  update: {
    200: {
      description: 'Conquista atualizada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/achievement',
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
      description: 'Conquista não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Conquista deletada com sucesso',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Conquista não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default achievementResponse;
