import trailResponse from '../responses/trailResponse';

const trailPath = {
  '/trail': {
    post: {
      tags: ['Trilha'],
      summary: 'Criar trilha',
      description: 'Cria uma nova trilha com desafios associados',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/trailCreate',
            },
            example: {
              title: 'Trilha Histórica do Recife',
              description: 'Explore os principais pontos históricos do Recife Antigo nesta trilha incrível.',
              theme: 'história',
              startDate: '2025-01-20T08:00:00Z',
              endDate: '2025-03-20T18:00:00Z',
              totalRewards: 500,
              ownerId: 1,
              challenges: [1, 2, 3],
            },
          },
        },
      },
      responses: trailResponse.create,
    },
  },
  '/trail/{id}': {
    get: {
      tags: ['Trilha'],
      summary: 'Buscar trilha',
      description: 'Retorna os dados de uma trilha pelo ID, incluindo seus desafios',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID da trilha',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailResponse.get,
    },
    patch: {
      tags: ['Trilha'],
      summary: 'Atualizar trilha',
      description: 'Atualiza os dados de uma trilha. Se challenges for enviado, substitui todos os desafios.',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID da trilha',
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
              $ref: '#/components/schemas/trailUpdate',
            },
            example: {
              title: 'Trilha Histórica Atualizada',
              totalRewards: 750,
            },
          },
        },
      },
      responses: trailResponse.update,
    },
    delete: {
      tags: ['Trilha'],
      summary: 'Deletar trilha',
      description: 'Remove uma trilha do sistema',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID da trilha',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailResponse.delete,
    },
  },
};

export default trailPath;
