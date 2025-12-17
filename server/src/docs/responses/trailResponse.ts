const trailResponse = {
  create: {
    201: {
      description: 'Trilha criada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trail',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos ou ID do proprietário obrigatório',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  get: {
    200: {
      description: 'Dados da trilha',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trail',
          },
        },
      },
    },
    400: {
      description: 'ID inválido',
    },
    404: {
      description: 'Trilha não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  update: {
    200: {
      description: 'Trilha atualizada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trail',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Trilha não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Trilha deletada com sucesso',
    },
    400: {
      description: 'ID inválido',
    },
    404: {
      description: 'Trilha não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default trailResponse;
