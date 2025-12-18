import { achievementResponse } from '../responses';

const achievementPath = {
  '/achievement': {
    post: {
      tags: ['Conquista'],
      summary: 'Criar conquista',
      description: 'Cria uma nova conquista no sistema',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/achievementCreate',
            },
            example: {
              title: 'Primeira Trilha Completa',
              description: 'Complete sua primeira trilha',
              criteria: 'Completar uma trilha inteira',
              isActive: true,
            },
          },
        },
      },
      responses: achievementResponse.create,
    },
    get: {
      tags: ['Conquista'],
      summary: 'Listar conquistas',
      description: 'Retorna a lista de todas as conquistas',
      responses: achievementResponse.list,
    },
  },
  '/achievement/{achievementId}': {
    get: {
      tags: ['Conquista'],
      summary: 'Buscar conquista',
      description: 'Retorna os dados de uma conquista pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'achievementId',
          description: 'ID da conquista',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: achievementResponse.get,
    },
    patch: {
      tags: ['Conquista'],
      summary: 'Atualizar conquista',
      description: 'Atualiza os dados de uma conquista',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'achievementId',
          description: 'ID da conquista',
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
              $ref: '#/components/schemas/achievementUpdate',
            },
            example: {
              title: 'Primeira Trilha Completa - Atualizado',
              isActive: false,
            },
          },
        },
      },
      responses: achievementResponse.update,
    },
    delete: {
      tags: ['Conquista'],
      summary: 'Deletar conquista',
      description: 'Remove uma conquista do sistema',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'achievementId',
          description: 'ID da conquista',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: achievementResponse.delete,
    },
  },
};

export default achievementPath;
