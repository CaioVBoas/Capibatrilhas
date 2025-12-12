import { z } from 'zod';

export const TrailSchema = z.object({
  title: z
    .string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'O nome é obrigatório',
    })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'O nome deve ter no máximo 100 caracteres' })
    .regex(/^[\p{L}\s'-]+$/u, {
      message: 'O nome contém caracteres inválidos',
    }),

  description: z
    .string({
      invalid_type_error: 'A descrição deve ser uma string',
      required_error: 'A descrição é obrigatória',
    })
    .min(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
    .max(500, { message: 'A descrição deve ter no máximo 500 caracteres' }),

  theme: z.string({
    invalid_type_error: 'O tema deve ser uma string',
    required_error: 'O tema é obrigatório',
  }),

  startDate: z.coerce.date({ required_error: 'Data de início obrigatória' }),

  endDate: z.coerce.date({ required_error: 'Data de término obrigatória' }),

  totalRewards: z.coerce
    .number()
    .int()
    .nonnegative({ message: 'As recompensas totais não podem ser negativas' }),

  challenges: z
    .array(z.number().int('O ID do desafio deve ser um número inteiro'))
    .min(1, { message: 'Deve haver pelo menos um desafio na trilha' }),
});

export const Trail = TrailSchema.refine(
  (data) => {
    if (data.endDate && data.startDate) {
      return data.endDate >= data.startDate;
    }
    return true;
  },
  {
    message: 'A data de término deve ser igual ou posterior à data de início',
    path: ['endDate'],
  },
);

export const UpdateTrail = TrailSchema.partial().refine(
  (data) => {
    if (data.endDate !== undefined && data.startDate !== undefined) {
      return data.endDate >= data.startDate;
    }
    return true;
  },
  {
    message: 'A data de término deve ser igual ou posterior à data de início',
    path: ['endDate'],
  },
);
export type TrailDTO = z.infer<typeof Trail>;
export type UpdateTrailDTO = z.infer<typeof UpdateTrail>;
