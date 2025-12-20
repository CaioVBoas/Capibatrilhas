const trailParticipationResponse = {
  create: {
    201: {
      description: 'Participação na trilha criada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailParticipation',
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
      description: 'Dados da participação',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailParticipation',
          },
        },
      },
    },
    404: {
      description: 'Participação não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  list: {
    200: {
      description: 'Lista de participações',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/trailParticipation',
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
      description: 'Participação atualizada com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailParticipation',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Participação não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Participação deletada com sucesso',
    },
    404: {
      description: 'Participação não encontrada',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default trailParticipationResponse;
