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
};

export default userPath;
