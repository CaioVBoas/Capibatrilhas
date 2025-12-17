const districtResponse = {
  create: {
    201: {
      description: 'Bairro criado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/district',
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
      description: 'Dados do bairro',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/district',
          },
        },
      },
    },
    400: {
      description: 'ID inválido',
    },
    404: {
      description: 'Bairro não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de bairros',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/district',
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
      description: 'Bairro atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/district',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Bairro não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Bairro deletado com sucesso',
    },
    404: {
      description: 'Bairro não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default districtResponse;
