const agendaResponse = {
  create: {
    201: {
      description: 'Evento criado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/agenda',
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
      description: 'Dados do evento',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/agenda',
          },
        },
      },
    },
    400: {
      description: 'ID inválido',
    },
    404: {
      description: 'Evento não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de eventos',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/agenda',
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
      description: 'Evento atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/agenda',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Evento não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Evento deletado com sucesso',
    },
    400: {
      description: 'ID inválido',
    },
    404: {
      description: 'Evento não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default agendaResponse;
