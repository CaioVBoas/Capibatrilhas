import z from 'zod';

export const CompletedChallenge = z.object({
  id: z
    .number({
      invalid_type_error: 'O ID do desafio completo deve ser um número',
      required_error: 'O ID do desafio completo é obrigatório',
    })
    .int('O ID do desafio completo deve ser um número inteiro')
    .positive('O ID do desafio completo deve ser positivo'),
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int('O ID do usuário deve ser um número inteiro')
    .positive('O ID do usuário deve ser positivo'),
  challengeId: z
    .number({
      invalid_type_error: 'O ID do desafio deve ser um número',
      required_error: 'O ID do desafio é obrigatório',
    })
    .int('O ID do desafio deve ser um número inteiro')
    .positive('O ID do desafio deve ser positivo'),
  trailId: z
    .number({
      invalid_type_error: 'O ID da trilha deve ser um número',
      required_error: 'O ID da trilha é obrigatório',
    })
    .int('O ID da trilha deve ser um número inteiro')
    .positive('O ID da trilha deve ser positivo'),
  completedAt: z.date({
    invalid_type_error: 'A data de conclusão deve ser uma data válida',
    required_error: 'A data de conclusão é obrigatória',
  }),
  rewardsEarned: z
    .number({
      invalid_type_error: 'As recompensas ganhas devem ser um número',
      required_error: 'As recompensas ganhas são obrigatórias',
    })
    .int('As recompensas ganhas devem ser um número inteiro')
    .nonnegative('As recompensas ganhas devem ser não-negativas'),
});

export const CreateCompletedChallenge = z.object({
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int('O ID do usuário deve ser um número inteiro')
    .positive('O ID do usuário deve ser positivo'),
  challengeId: z
    .number({
      invalid_type_error: 'O ID do desafio deve ser um número',
      required_error: 'O ID do desafio é obrigatório',
    })
    .int('O ID do desafio deve ser um número inteiro')
    .positive('O ID do desafio deve ser positivo'),
  trailId: z
    .number({
      invalid_type_error: 'O ID da trilha deve ser um número',
      required_error: 'O ID da trilha é obrigatório',
    })
    .int('O ID da trilha deve ser um número inteiro')
    .positive('O ID da trilha deve ser positivo'),
  rewardsEarned: z
    .number({
      invalid_type_error: 'As recompensas ganhas devem ser um número',
      required_error: 'As recompensas ganhas são obrigatórias',
    })
    .int('As recompensas ganhas devem ser um número inteiro')
    .nonnegative('As recompensas ganhas devem ser não-negativas'),
});

export const UpdateCompletedChallenge = z.object({
  rewardsEarned: z
    .number({
      invalid_type_error: 'As recompensas ganhas devem ser um número',
    })
    .int('As recompensas ganhas devem ser um número inteiro')
    .nonnegative('As recompensas ganhas devem ser não-negativas')
    .optional(),
});
