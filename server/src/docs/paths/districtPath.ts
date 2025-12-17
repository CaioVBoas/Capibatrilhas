import districtResponse from '../responses/districtResponse';

const districtPath = {
  '/district': {
    get: {
      tags: ['Bairro em Destaque'],
      summary: 'Listar bairros',
      description: 'Retorna todos os bairros em destaque. Pode filtrar por tag.',
      parameters: [
        {
          in: 'query',
          name: 'tag',
          description: 'Filtrar por tag',
          required: false,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: districtResponse.list,
    },
    post: {
      tags: ['Bairro em Destaque'],
      summary: 'Criar bairro',
      description: 'Cria um novo bairro em destaque',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/districtCreate',
            },
            example: {
              name: 'Centro Histórico',
              location: 'Recife, Pernambuco',
              bonusScore: 100,
              description: 'O coração histórico da cidade com diversos pontos turísticos e culturais.',
              tags: ['histórico', 'turismo', 'cultura'],
              urlImage: 'https://exemplo.com/imagem.jpg',
            },
          },
        },
      },
      responses: districtResponse.create,
    },
  },
  '/district/{id}': {
    get: {
      tags: ['Bairro em Destaque'],
      summary: 'Buscar bairro',
      description: 'Retorna os dados de um bairro pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID do bairro',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: districtResponse.get,
    },
    patch: {
      tags: ['Bairro em Destaque'],
      summary: 'Atualizar bairro',
      description: 'Atualiza os dados de um bairro',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID do bairro',
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
              $ref: '#/components/schemas/districtUpdate',
            },
            example: {
              bonusScore: 150,
              description: 'Descrição atualizada do bairro.',
            },
          },
        },
      },
      responses: districtResponse.update,
    },
    delete: {
      tags: ['Bairro em Destaque'],
      summary: 'Deletar bairro',
      description: 'Remove um bairro do sistema',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID do bairro',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: districtResponse.delete,
    },
  },
};

export default districtPath;
