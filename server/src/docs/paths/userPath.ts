import { userResponse } from '../responses';

const userPath = {
  '/user': {
    post: {
      tags: ['User'],
      summary: 'Create a user',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/user',
            },
            example: {
              name: 'Ednaldo Pereira',
              phone: '99999999',
              email: 'ednaldopereira@gmail.com',
              password: 'senha',
            },
          },
        },
      },

      responses: userResponse.create,
    },
    get: {
      tags: ['User'],
      summary: 'List all users',
      description: 'Get a list of all users (requires authentication)',
      security: [{ bearerAuth: [] }],
      responses: userResponse.list,
    },
  },
  '/user/{id}': {
    get: {
      tags: ['User'],
      summary: 'Get user information',
      description: "Get user information from it's id",
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      responses: userResponse.get,
    },
    patch: {
      tags: ['User'],
      summary: 'Update user profile',
      description: 'Update user profile information (requires authentication)',
      security: [{ bearerAuth: [] }],
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                phone: { type: 'string' },
                email: { type: 'string' },
              },
            },
            example: {
              name: 'Ednaldo Pereira Updated',
              phone: '88888888',
            },
          },
        },
      },
      responses: userResponse.update,
    },
    delete: {
      tags: ['User'],
      summary: 'Delete user',
      description: 'Delete a user (requires authentication)',
      security: [{ bearerAuth: [] }],
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      responses: userResponse.delete,
    },
  },
  '/user/{id}/progress': {
    patch: {
      tags: ['User'],
      summary: 'Update user game progress',
      description: 'Update user points and level (admin only)',
      security: [{ bearerAuth: [] }],
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                points: { type: 'number' },
                level: { type: 'number' },
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
  '/user/{id}/password': {
    patch: {
      tags: ['User'],
      summary: 'Change user password',
      description: 'Change user password (requires authentication and current password)',
      security: [{ bearerAuth: [] }],
      parameters: [{
        in: 'path',
        name: 'id',
        description: 'User id',
        required: true,
        schema: {
          type: 'string',
        },
      }],
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
              currentPassword: 'senha',
              newPassword: 'novaSenha123',
            },
          },
        },
      },
      responses: userResponse.changePassword,
    },
  },
};

export default userPath;
