import z from 'zod';

export const Challenge = z.object({
  title: z
    .string({
      invalid_type_error: 'O título deve ser uma string',
      required_error: 'O título é obrigatório',
    })
    .min(3, { message: 'O título deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'O título deve ter no máximo 100 caracteres' }),

  description: z
    .string({
      invalid_type_error: 'A descrição deve ser uma string',
      required_error: 'A descrição é obrigatória',
    })
    .min(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
    .max(500, { message: 'A descrição deve ter no máximo 500 caracteres' }),

  theme: z
    .string({
      invalid_type_error: 'O tema deve ser uma string',
      required_error: 'O tema é obrigatório',
    })
    .min(3, { message: 'O tema deve ter no mínimo 3 caracteres' }),

  conclusionCriteria: z.string({
    invalid_type_error: 'O critério de conclusão deve ser uma string',
    required_error: 'O critério de conclusão é obrigatório',
  }),

  location: z.string({
    invalid_type_error: 'A localização deve ser uma string',
    required_error: 'A localização é obrigatória',
  }),

  rewards: z.number({
    invalid_type_error: 'A recompensa deve ser um número',
    required_error: 'A recompensa é obrigatória',
  }),

  isActive: z.boolean().default(true),

  conclusionToken: z.string().optional(),
});

export const UpdateChallenge = Challenge.partial();
