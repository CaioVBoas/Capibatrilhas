const userAchievementSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID único do relacionamento usuário-conquista',
    },
    userId: {
      type: 'integer',
      description: 'ID do usuário',
    },
    achievementId: {
      type: 'integer',
      description: 'ID da conquista',
    },
    unlockedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Data de desbloqueio',
    },
  },
  required: ['userId', 'achievementId'],
};

const userAchievementCreateSchema = {
  type: 'object',
  properties: {
    userId: { type: 'integer' },
    achievementId: { type: 'integer' },
  },
  required: ['userId', 'achievementId'],
};

const userAchievementUpdateSchema = {
  type: 'object',
  properties: {
    unlockedAt: { type: 'string', format: 'date-time' },
  },
};

export default userAchievementSchema;
export { userAchievementCreateSchema, userAchievementUpdateSchema };
