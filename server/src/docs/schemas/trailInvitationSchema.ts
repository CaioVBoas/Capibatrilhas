const trailInvitationSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do convite',
    },
    trailId: {
      type: 'integer',
      description: 'ID da trilha',
    },
    senderId: {
      type: 'integer',
      description: 'ID do usuário que enviou o convite',
    },
    inviteeId: {
      type: 'integer',
      description: 'ID do usuário convidado',
    },
    status: {
      type: 'string',
      enum: ['PENDENTE', 'ACEITO', 'RECUSADO'],
      default: 'PENDENTE',
      description: 'Status do convite',
    },
    trail: {
      type: 'object',
      description: 'Dados da trilha',
    },
    sender: {
      type: 'object',
      description: 'Dados do remetente',
    },
    invitee: {
      type: 'object',
      description: 'Dados do convidado',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de criação',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de atualização',
    },
  },
  required: ['trailId', 'senderId', 'inviteeId'],
};

const trailInvitationCreateSchema = {
  type: 'object',
  properties: {
    trailId: { type: 'integer', minimum: 1 },
    senderId: { type: 'integer', minimum: 1 },
    inviteeId: { type: 'integer', minimum: 1 },
  },
  required: ['trailId', 'senderId', 'inviteeId'],
};

const trailInvitationUpdateSchema = {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: ['PENDENTE', 'ACEITO', 'RECUSADO'],
    },
  },
};

export default trailInvitationSchema;
export { trailInvitationCreateSchema, trailInvitationUpdateSchema };
