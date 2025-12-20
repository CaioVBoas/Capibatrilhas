import challengeResponse from '../responses/challengeResponse';

const challengePath = {
  '/challenge': {
    get: {
      tags: ['Desafio'],
      summary: 'Listar desafios',
      description: 'Retorna todos os desafios cadastrados',
      responses: challengeResponse.list,
    },
    post: {
      tags: ['Desafio'],
      summary: 'Criar desafio',
      description: 'Cria um novo desafio',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/challengeCreate',
            },
            example: {
              title: 'Visitar o Marco Zero',
              description: 'Visite o Marco Zero e tire uma foto com a placa histórica para completar o desafio.',
              theme: 'turismo',
              conclusionCriteria: 'Enviar foto no local',
              location: 'Praça Rio Branco, Recife - PE',
              rewards: 100,
            },
          },
        },
      },
      responses: challengeResponse.create,
    },
  },
  '/challenge/{challengeId}': {
    get: {
      tags: ['Desafio'],
      summary: 'Buscar desafio',
      description: 'Retorna os dados de um desafio pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'challengeId',
          description: 'ID do desafio',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: challengeResponse.get,
    },
    patch: {
      tags: ['Desafio'],
      summary: 'Atualizar desafio',
      description: 'Atualiza os dados de um desafio',
      parameters: [
        {
          in: 'path',
          name: 'challengeId',
          description: 'ID do desafio',
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
              $ref: '#/components/schemas/challengeUpdate',
            },
            example: {
              rewards: 150,
              isActive: true,
            },
          },
        },
      },
      responses: challengeResponse.update,
    },
    delete: {
      tags: ['Desafio'],
      summary: 'Deletar desafio',
      description: 'Remove um desafio do sistema',
      parameters: [
        {
          in: 'path',
          name: 'challengeId',
          description: 'ID do desafio',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: challengeResponse.delete,
    },
  },
};

export default challengePath;
