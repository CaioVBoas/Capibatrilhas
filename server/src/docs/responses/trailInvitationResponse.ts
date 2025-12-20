const trailInvitationResponse = {
  create: {
    201: {
      description: 'Convite para trilha criado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailInvitation',
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
      description: 'Dados do convite',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailInvitation',
          },
        },
      },
    },
    404: {
      description: 'Convite não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  update: {
    200: {
      description: 'Convite atualizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/trailInvitation',
          },
        },
      },
    },
    400: {
      description: 'Parâmetros inválidos',
    },
    404: {
      description: 'Convite não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  delete: {
    200: {
      description: 'Convite deletado com sucesso',
    },
    404: {
      description: 'Convite não encontrado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default trailInvitationResponse;
