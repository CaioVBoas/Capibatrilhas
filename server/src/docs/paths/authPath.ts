import authResponse from '../responses/authResponse';

const authPath = {
  '/sessions': {
    post: {
      tags: ['Autenticação'],
      summary: 'Realizar login',
      description: 'Autentica o usuário e retorna tokens de acesso',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/login',
            },
            example: {
              email: 'usuario@email.com',
              password: 'senha123',
            },
          },
        },
      },
      responses: authResponse.login,
    },
    patch: {
      tags: ['Autenticação'],
      summary: 'Renovar token',
      description: 'Renova o access token usando o refresh token armazenado nos cookies',
      responses: authResponse.refresh,
    },
    delete: {
      tags: ['Autenticação'],
      summary: 'Realizar logout',
      description: 'Encerra a sessão do usuário e limpa os cookies',
      responses: authResponse.logout,
    },
  },
};

export default authPath;
