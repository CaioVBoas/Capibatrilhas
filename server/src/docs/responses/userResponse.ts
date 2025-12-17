const userResponse = {
  create: {
    201: {
      description: 'User created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  list: {
    200: {
      description: 'List of users',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/user',
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  get: {
    200: {
      description: 'User information',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    404: {
      description: 'User not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  update: {
    200: {
      description: 'User updated successfully',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    401: {
      description: 'Unauthorized',
    },
    404: {
      description: 'User not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  updateProgress: {
    200: {
      description: 'User progress updated successfully',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/user',
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters',
    },
    401: {
      description: 'Unauthorized',
    },
    403: {
      description: 'Forbidden - Admin access required',
    },
    404: {
      description: 'User not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  changePassword: {
    200: {
      description: 'Password changed successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
    400: {
      description: 'Incorrect parameters or invalid current password',
    },
    401: {
      description: 'Unauthorized',
    },
    404: {
      description: 'User not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
  delete: {
    200: {
      description: 'User deleted successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
    },
    404: {
      description: 'User not found',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
};

export default userResponse;
