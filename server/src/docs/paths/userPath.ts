import { userResponse } from '../responses';

const userPath = {
  '/user': {
    post: {
      tags: ['Usuário'],
      summary: 'Criar usuário',
      description: 'Cria um novo usuário no sistema',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/userCreate',
            },
            example: {
              name: 'João Silva',
              phone: '11999999999',
              email: 'joao@email.com',
              password: 'senha1234',
              cpf: '12345678901',
              birthdate: '1990-05-15',
              zipCode: '01310100',
              state: 'SP',
              city: 'São Paulo',
              district: 'Centro',
              street: 'Av. Paulista',
              number: '1000',
            },
          },
        },
      },
      responses: userResponse.create,
    },
    get: {
      tags: ['Usuário'],
      summary: 'Listar usuários',
      description: 'Retorna a lista de todos os usuários (requer autenticação)',
      security: [{ bearerAuth: [] }],
      responses: userResponse.list,
    },
  },
  '/user/{userId}': {
    get: {
      tags: ['Usuário'],
      summary: 'Buscar usuário',
      description: 'Retorna os dados de um usuário pelo ID',
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
      responses: userResponse.get,
    },
    patch: {
      tags: ['Usuário'],
      summary: 'Atualizar usuário',
      description: 'Atualiza os dados de um usuário',
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
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/userUpdate',
            },
            example: {
              name: 'João Silva Atualizado',
              phone: '11988888888',
            },
          },
        },
      },
      responses: userResponse.update,
    },
    delete: {
      tags: ['Usuário'],
      summary: 'Deletar usuário',
      description: 'Remove um usuário do sistema',
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
      responses: userResponse.delete,
    },
  },
  '/user/{userId}/progress': {
    patch: {
      tags: ['Usuário'],
      summary: 'Atualizar progresso do usuário',
      description: 'Atualiza pontos e nível do usuário (somente administradores)',
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
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                points: { type: 'integer' },
                level: { type: 'integer' },
              },
            },
            example: {
              points: 1000,
              level: 5,
            },
          },
        },
      },
      responses: userResponse.updateProgress,
    },
  },
  '/user/{userId}/password': {
    patch: {
      tags: ['Usuário'],
      summary: 'Alterar senha do usuário',
      description: 'Altera a senha do usuário (requer autenticação e senha atual)',
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
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['currentPassword', 'newPassword'],
              properties: {
                currentPassword: { type: 'string' },
                newPassword: { type: 'string' },
              },
            },
            example: {
              currentPassword: 'senha1234',
              newPassword: 'novaSenha5678',
            },
          },
        },
      },
      responses: userResponse.changePassword,
    },
  },
};

export default userPath;