const userAchievementResponse = {
  create: {
    201: {
      description: 'Conquista desbloqueada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/userAchievement',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos ou conquista já desbloqueada',
    },
    404: {
      description: 'Usuário ou conquista não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de conquistas desbloqueadas',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/userAchievement',
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
      description: 'Dados da conquista desbloqueada',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/userAchievement',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Conquista desbloqueada não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  update: {
    200: {
      description: 'Conquista desbloqueada atualizada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/userAchievement',
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
      description: 'Conquista desbloqueada não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Conquista desbloqueada deletada com sucesso',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Conquista desbloqueada não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  listByUser: {
    200: {
      description: 'Lista de conquistas desbloqueadas do usuário',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/userAchievement',
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

export default userAchievementResponse;
