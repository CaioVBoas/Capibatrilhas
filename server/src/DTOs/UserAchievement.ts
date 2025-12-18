import z from 'zod';

export const CreateUserAchievement = z.object({
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int({ message: 'O ID do usuário deve ser um número inteiro' })
    .positive({ message: 'O ID do usuário deve ser positivo' }),
  achievementId: z
    .number({
      invalid_type_error: 'O ID da conquista deve ser um número',
      required_error: 'O ID da conquista é obrigatório',
    })
    .int({ message: 'O ID da conquista deve ser um número inteiro' })
    .positive({ message: 'O ID da conquista deve ser positivo' }),
  unlockedAt: z
    .date({
      invalid_type_error: 'A data de desbloqueio deve ser uma data válida',
    })
    .optional(),
});

export const UserAchievement = z.object({
  id: z
    .number({
      invalid_type_error: 'O ID deve ser um número',
      required_error: 'O ID é obrigatório',
    })
    .int({ message: 'O ID deve ser um número inteiro' })
    .positive({ message: 'O ID deve ser positivo' }),
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int({ message: 'O ID do usuário deve ser um número inteiro' })
    .positive({ message: 'O ID do usuário deve ser positivo' }),
  achievementId: z
    .number({
      invalid_type_error: 'O ID da conquista deve ser um número',
      required_error: 'O ID da conquista é obrigatório',
    })
    .int({ message: 'O ID da conquista deve ser um número inteiro' })
    .positive({ message: 'O ID da conquista deve ser positivo' }),
  unlockedAt: z.date({
    invalid_type_error: 'A data de desbloqueio deve ser uma data válida',
    required_error: 'A data de desbloqueio é obrigatória',
  }),
});

export const UpdateUserAchievement = UserAchievement.partial();
export const UserAchievementArray = z.array(UserAchievement);
export type CreateUserAchievementDTO = z.infer<typeof CreateUserAchievement>;
export type UserAchievementDTO = z.infer<typeof UserAchievement>;
export type UpdateUserAchievementDTO = z.infer<typeof UpdateUserAchievement>;
export type UserAchievementArrayDTO = z.infer<typeof UserAchievementArray>;
