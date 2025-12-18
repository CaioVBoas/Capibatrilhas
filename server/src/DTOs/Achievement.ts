import z from 'zod';

export const CreateAchievement = z.object({
  title: z
    .string({
      invalid_type_error: 'O título da conquista deve ser uma string',
      required_error: 'O título da conquista é obrigatório',
    })
    .min(1, { message: 'O título da conquista não pode estar vazio' })
    .max(100, {
      message: 'O título da conquista deve ter no máximo 100 caracteres',
    }),
  description: z
    .string({
      invalid_type_error: 'A descrição da conquista deve ser uma string',
      required_error: 'A descrição da conquista é obrigatória',
    })
    .min(1, { message: 'A descrição da conquista não pode estar vazia' })
    .max(255, {
      message: 'A descrição da conquista deve ter no máximo 255 caracteres',
    }),
  criteria: z
    .string({
      invalid_type_error: 'Os critérios da conquista devem ser uma string',
      required_error: 'Os critérios da conquista são obrigatórios',
    })
    .min(1, { message: 'Os critérios da conquista não podem estar vazios' })
    .max(500, {
      message: 'Os critérios da conquista devem ter no máximo 500 caracteres',
    }),
  isActive: z
    .boolean({
      invalid_type_error: 'O status ativo deve ser um booleano',
    })
    .optional(),
});

export const Achievement = z.object({
  id: z
    .number({
      invalid_type_error: 'O ID da conquista deve ser um número',
      required_error: 'O ID da conquista é obrigatório',
    })
    .int({ message: 'O ID da conquista deve ser um número inteiro' })
    .positive({ message: 'O ID da conquista deve ser positivo' }),
  title: z
    .string({
      invalid_type_error: 'O título da conquista deve ser uma string',
      required_error: 'O título da conquista é obrigatório',
    })
    .min(1, { message: 'O título da conquista não pode estar vazio' })
    .max(100, {
      message: 'O título da conquista deve ter no máximo 100 caracteres',
    }),
  description: z
    .string({
      invalid_type_error: 'A descrição da conquista deve ser uma string',
      required_error: 'A descrição da conquista é obrigatória',
    })
    .min(1, { message: 'A descrição da conquista não pode estar vazia' })
    .max(255, {
      message: 'A descrição da conquista deve ter no máximo 255 caracteres',
    }),
  criteria: z
    .string({
      invalid_type_error: 'Os critérios da conquista devem ser uma string',
      required_error: 'Os critérios da conquista são obrigatórios',
    })
    .min(1, { message: 'Os critérios da conquista não podem estar vazios' })
    .max(500, {
      message: 'Os critérios da conquista devem ter no máximo 500 caracteres',
    }),
  isActive: z.boolean({
    invalid_type_error: 'O status ativo deve ser um booleano',
    required_error: 'O status ativo é obrigatório',
  }),
  createdAt: z
    .date({
      invalid_type_error: 'A data de criação deve ser uma data válida',
    })
    .optional(),
  updatedAt: z
    .date({
      invalid_type_error: 'A data de atualização deve ser uma data válida',
    })
    .optional(),
});

export const UpdateAchievement = Achievement.partial();
export const AchievementArray = z.array(Achievement);
export type CreateAchievementDTO = z.infer<typeof CreateAchievement>;
export type AchievementDTO = z.infer<typeof Achievement>;
export type UpdateAchievementDTO = z.infer<typeof UpdateAchievement>;
export type AchievementArrayDTO = z.infer<typeof AchievementArray>;
