import trailParticipationResponse from '../responses/trailParticipationResponse';

const trailParticipationPath = {
  '/trail-participation': {
    get: {
      tags: ['Participação na Trilha'],
      summary: 'Listar participações',
      description: 'Retorna todas as participações em trilhas',
      responses: trailParticipationResponse.list,
    },
    post: {
      tags: ['Participação na Trilha'],
      summary: 'Criar participação',
      description: 'Registra a participação de um usuário em uma trilha',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/trailParticipationCreate',
            },
            example: {
              userId: 1,
              trailId: 1,
              progress: 0,
              isCompleted: false,
            },
          },
        },
      },
      responses: trailParticipationResponse.create,
    },
  },
  '/trail-participation/{trailParticipationId}': {
    get: {
      tags: ['Participação na Trilha'],
      summary: 'Buscar participação',
      description: 'Retorna os dados de uma participação pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'trailParticipationId',
          description: 'ID da participação',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailParticipationResponse.get,
    },
    patch: {
      tags: ['Participação na Trilha'],
      summary: 'Atualizar participação',
      description: 'Atualiza o progresso ou status de uma participação',
      parameters: [
        {
          in: 'path',
          name: 'trailParticipationId',
          description: 'ID da participação',
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
              $ref: '#/components/schemas/trailParticipationUpdate',
            },
            example: {
              progress: 75,
              isCompleted: false,
            },
          },
        },
      },
      responses: trailParticipationResponse.update,
    },
    delete: {
      tags: ['Participação na Trilha'],
      summary: 'Deletar participação',
      description: 'Remove uma participação da trilha',
      parameters: [
        {
          in: 'path',
          name: 'trailParticipationId',
          description: 'ID da participação',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailParticipationResponse.delete,
    },
  },
};

export default trailParticipationPath;
