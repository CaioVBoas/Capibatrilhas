import completedChallengeResponse from '../responses/completedChallengeResponse';

const completedChallengePath = {
  '/completed-challenge': {
    get: {
      tags: ['Desafio Completado'],
      summary: 'Listar desafios completados',
      description: 'Retorna todos os desafios completados',
      responses: completedChallengeResponse.list,
    },
    post: {
      tags: ['Desafio Completado'],
      summary: 'Registrar desafio completado',
      description: 'Registra que um usuário completou um desafio em uma trilha',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/completedChallengeCreate',
            },
            example: {
              userId: 1,
              challengeId: 1,
              trailId: 1,
              rewardsEarned: 100,
            },
          },
        },
      },
      responses: completedChallengeResponse.create,
    },
  },
  '/completed-challenge/{completedChallengeId}': {
    get: {
      tags: ['Desafio Completado'],
      summary: 'Buscar desafio completado',
      description: 'Retorna os dados de um desafio completado pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'completedChallengeId',
          description: 'ID do registro',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: completedChallengeResponse.get,
    },
    patch: {
      tags: ['Desafio Completado'],
      summary: 'Atualizar desafio completado',
      description: 'Atualiza as recompensas de um desafio completado',
      parameters: [
        {
          in: 'path',
          name: 'completedChallengeId',
          description: 'ID do registro',
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
              $ref: '#/components/schemas/completedChallengeUpdate',
            },
            example: {
              rewardsEarned: 150,
            },
          },
        },
      },
      responses: completedChallengeResponse.update,
    },
    delete: {
      tags: ['Desafio Completado'],
      summary: 'Deletar desafio completado',
      description: 'Remove um registro de desafio completado',
      parameters: [
        {
          in: 'path',
          name: 'completedChallengeId',
          description: 'ID do registro',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: completedChallengeResponse.delete,
    },
  },
  '/completed-challenge/trail/{trailId}': {
    get: {
      tags: ['Desafio Completado'],
      summary: 'Listar por trilha',
      description: 'Retorna todos os desafios completados de uma trilha específica',
      parameters: [
        {
          in: 'path',
          name: 'trailId',
          description: 'ID da trilha',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: completedChallengeResponse.list,
    },
  },
};

export default completedChallengePath;
