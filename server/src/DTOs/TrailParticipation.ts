import z from 'zod';

export const TrailParticipation = z.object({
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int()
    .positive(),

  trailId: z
    .number({
      invalid_type_error: 'O ID da trilha deve ser um número',
      required_error: 'O ID da trilha é obrigatório',
    })
    .int()
    .positive(),

  progress: z
    .number({
      invalid_type_error: 'O progresso deve ser um número',
    })
    .min(0)
    .max(100)
    .optional(),

  isCompleted: z
    .boolean({
      invalid_type_error: 'isCompleted deve ser um booleano',
    })
    .optional(),
});

export const UpdateTrailParticipation = TrailParticipation.partial();
