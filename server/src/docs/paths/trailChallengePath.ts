import trailChallengeResponse from '../responses/trailChallengeResponse';

const trailChallengePath = {
  '/trail-challenge': {
    get: {
      tags: ['Desafio da Trilha'],
      summary: 'Listar todos os desafios de trilhas',
      description: 'Retorna todas as associações entre trilhas e desafios',
      responses: trailChallengeResponse.list,
    },
    post: {
      tags: ['Desafio da Trilha'],
      summary: 'Criar desafio da trilha',
      description: 'Associa um desafio a uma trilha com ordem específica',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/trailChallengeCreate',
            },
            example: {
              trailId: 1,
              challengeId: 5,
              challengeOrder: 3,
            },
          },
        },
      },
      responses: trailChallengeResponse.create,
    },
  },
  '/trail-challenge/{trailChallengeId}': {
    get: {
      tags: ['Desafio da Trilha'],
      summary: 'Buscar desafio da trilha',
      description: 'Retorna os dados de uma associação trilha-desafio pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'trailChallengeId',
          description: 'ID da associação trilha-desafio',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailChallengeResponse.get,
    },
    patch: {
      tags: ['Desafio da Trilha'],
      summary: 'Atualizar desafio da trilha',
      description: 'Atualiza uma associação trilha-desafio',
      parameters: [
        {
          in: 'path',
          name: 'trailChallengeId',
          description: 'ID da associação trilha-desafio',
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
              $ref: '#/components/schemas/trailChallengeUpdate',
            },
            example: {
              challengeOrder: 5,
            },
          },
        },
      },
      responses: trailChallengeResponse.update,
    },
    delete: {
      tags: ['Desafio da Trilha'],
      summary: 'Deletar desafio da trilha',
      description: 'Remove uma associação trilha-desafio',
      parameters: [
        {
          in: 'path',
          name: 'trailChallengeId',
          description: 'ID da associação trilha-desafio',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: trailChallengeResponse.delete,
    },
  },
  '/trail-challenge/trail/{trailId}': {
    get: {
      tags: ['Desafio da Trilha'],
      summary: 'Listar desafios de uma trilha',
      description: 'Retorna todos os desafios associados a uma trilha específica',
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
      responses: trailChallengeResponse.list,
    },
  },
};

export default trailChallengePath;
