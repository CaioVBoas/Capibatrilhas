import trailInvitationResponse from '../responses/trailInvitationResponse';

const trailInvitationPath = {
  '/trail-invitation': {
    post: {
      tags: ['Convite para Trilha'],
      summary: 'Criar convite',
      description: 'Envia um convite para participar de uma trilha',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/trailInvitationCreate',
            },
            example: {
              trailId: 1,
              senderId: 1,
              inviteeId: 2,
            },
          },
        },
      },
      responses: trailInvitationResponse.create,
    },
  },
  '/trail-invitation/{trailInvitationId}': {
    get: {
      tags: ['Convite para Trilha'],
      summary: 'Buscar convite',
      description: 'Retorna os dados de um convite pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'trailInvitationId',
          description: 'ID do convite',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailInvitationResponse.get,
    },
    patch: {
      tags: ['Convite para Trilha'],
      summary: 'Atualizar convite',
      description: 'Atualiza o status do convite (PENDENTE, ACEITO, RECUSADO)',
      parameters: [
        {
          in: 'path',
          name: 'trailInvitationId',
          description: 'ID do convite',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/trailInvitationUpdate',
            },
            example: {
              status: 'ACEITO',
            },
          },
        },
      },
      responses: trailInvitationResponse.update,
    },
    delete: {
      tags: ['Convite para Trilha'],
      summary: 'Deletar convite',
      description: 'Remove um convite',
      parameters: [
        {
          in: 'path',
          name: 'trailInvitationId',
          description: 'ID do convite',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailInvitationResponse.delete,
    },
  },
};

export default trailInvitationPath;
