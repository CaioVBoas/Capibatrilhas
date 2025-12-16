import agendaResponse from '../responses/agendaResponse';

const agendaPath = {
  '/agenda': {
    get: {
      tags: ['Agenda de Eventos'],
      summary: 'Listar eventos',
      description: 'Retorna todos os eventos da agenda. Pode filtrar por tag.',
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
      responses: agendaResponse.list,
    },
    post: {
      tags: ['Agenda de Eventos'],
      summary: 'Criar evento',
      description: 'Cria um novo evento na agenda',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/agendaCreate',
            },
            example: {
              title: 'Festival de Cultura Popular',
              description: 'Grande festival celebrando a cultura popular local com shows, danças e comidas típicas.',
              location: 'Praça do Marco Zero, Recife - PE',
              eventDate: '2025-02-15T18:00:00Z',
              endDate: '2025-02-15T23:00:00Z',
              category: 'cultural',
              tags: ['cultura', 'festival', 'música'],
              organizer: 'Prefeitura de Recife',
              value: 'Gratuito',
              urlImage: 'https://exemplo.com/festival.jpg',
            },
          },
        },
      },
      responses: agendaResponse.create,
    },
  },
  '/agenda/{id}': {
    get: {
      tags: ['Agenda de Eventos'],
      summary: 'Buscar evento',
      description: 'Retorna os dados de um evento pelo ID',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID do evento',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: agendaResponse.get,
    },
    patch: {
      tags: ['Agenda de Eventos'],
      summary: 'Atualizar evento',
      description: 'Atualiza os dados de um evento',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID do evento',
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
              $ref: '#/components/schemas/agendaUpdate',
            },
            example: {
              isFeatured: true,
              value: 'R$ 20,00',
            },
          },
        },
      },
      responses: agendaResponse.update,
    },
    delete: {
      tags: ['Agenda de Eventos'],
      summary: 'Deletar evento',
      description: 'Remove um evento da agenda',
      parameters: [
        {
          in: 'path',
          name: 'id',
          description: 'ID do evento',
          required: true,
          schema: {
            type: 'integer',
          },
        },
      ],
      responses: agendaResponse.delete,
    },
  },
};

export default agendaPath;
