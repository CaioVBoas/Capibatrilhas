const userResponse = {
  create: {
    201: {
      description: 'Usuário criado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos ou email/CPF já cadastrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de usuários',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/user',
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
      description: 'Dados do usuário',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
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
  update: {
    200: {
      description: 'Usuário atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
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
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Usuário deletado com sucesso',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  updateProgress: {
    200: {
      description: 'Progresso do usuário atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
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
    403: {
      description: 'Acesso negado - requer permissão de administrador',
    },
    404: {
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  changePassword: {
    200: {
      description: 'Senha alterada com sucesso',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos ou senha atual incorreta',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Usuário deletado com sucesso',
    },
    401: {
      description: 'Não autorizado',
    },
    404: {
      description: 'Usuário não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default userResponse;