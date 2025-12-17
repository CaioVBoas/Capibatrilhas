const authResponse = {
  login: {
    200: {
      description: 'Login realizado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/loginResponse',
          },
        },
      },
    },
    400: {
      description: 'Credenciais inválidas',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  refresh: {
    200: {
      description: 'Token renovado com sucesso',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/loginResponse',
          },
        },
      },
    },
    401: {
      description: 'Token inválido ou expirado',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
  logout: {
    200: {
      description: 'Logout realizado com sucesso',
    },
    500: {
      description: 'Erro interno do servidor',
    },
  },
};

export default authResponse;
