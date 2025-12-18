import { userAchievementResponse } from '../responses';

const userAchievementPath = {
  '/user-achievement': {
    post: {
      tags: ['Conquista de Usuário'],
      summary: 'Desbloquear conquista',
      description: 'Desbloqueia uma conquista para um usuário',
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/userAchievementCreate',
            },
            example: {
              userId: 1,
              achievementId: 1,
            },
          },
        },
      },
      responses: userAchievementResponse.create,
    },
    get: {
      tags: ['Conquista de Usuário'],
      summary: 'Listar conquistas desbloqueadas',
      description: 'Retorna a lista de todas as conquistas desbloqueadas (requer autenticação)',
      security: [{ bearerAuth: [] }],
      responses: userAchievementResponse.list,
    },
  },
  '/user-achievement/{userAchievementId}': {
    get: {
      tags: ['Conquista de Usuário'],
      summary: 'Buscar conquista desbloqueada',
      description: 'Retorna os dados de uma conquista desbloqueada pelo ID',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'userAchievementId',
          description: 'ID da conquista desbloqueada',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: userAchievementResponse.get,
    },
    patch: {
      tags: ['Conquista de Usuário'],
      summary: 'Atualizar conquista desbloqueada',
      description: 'Atualiza os dados de uma conquista desbloqueada',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'userAchievementId',
          description: 'ID da conquista desbloqueada',
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
              $ref: '#/components/schemas/userAchievementUpdate',
            },
            example: {
              unlockedAt: '2024-01-15T10:30:00Z',
            },
          },
        },
      },
      responses: userAchievementResponse.update,
    },
    delete: {
      tags: ['Conquista de Usuário'],
      summary: 'Deletar conquista desbloqueada',
      description: 'Remove uma conquista desbloqueada do sistema',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'userAchievementId',
          description: 'ID da conquista desbloqueada',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: userAchievementResponse.delete,
    },
  },
  '/user-achievement/user/{userId}': {
    get: {
      tags: ['Conquista de Usuário'],
      summary: 'Listar conquistas do usuário',
      description: 'Retorna todas as conquistas desbloqueadas de um usuário específico',
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          in: 'path',
          name: 'userId',
          description: 'ID do usuário',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: userAchievementResponse.listByUser,
    },
  },
};

export default userAchievementPath;
