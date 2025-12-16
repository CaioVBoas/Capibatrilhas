import { z } from 'zod';

export const agendaSchema = z.object({
  title: z
    .string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'O nome é obrigatório',
    })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .regex(/^[\p{L}\s'-]+$/u, {
      message: 'O nome contém caracteres inválidos',
    }),

  description: z
    .string({
      invalid_type_error: 'A descrição deve ser uma string',
      required_error: 'A descrição é obrigatória',
    })
    .min(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
    .max(500, { message: 'A descrição deve ter no máximo 500 caracteres' })
    .regex(/^[\p{L}\d\s.,'-]+$/u, {
      message: 'A descrição contém caracteres inválidos',
    }),

  location: z
    .string({ invalid_type_error: 'A localização deve ser uma string',
              required_error: 'A localização é obrigatória',
     })
    .min(5, {message: 'Detalhe melhor a localização',})
    .regex(/^[\p{L}\d\s,.-]+$/u, {
      message: 'A localização contém caracteres inválidos',
    }),

  eventDate: z
    .coerce.date({
      invalid_type_error: 'A data do evento deve ser uma data',
      required_error: 'A data do evento é obrigatória',}),

  endDate: z
    .coerce.date({
      invalid_type_error: 'A data do evento deve ser uma data',
      required_error: 'A data do fim do evento é obrigatória',})
      .refine(date => date >= new Date(), { message: 'A data de término do evento deve ser no futuro' }),

  category: z
    .string({
      invalid_type_error: 'A categoria deve ser uma string',
      required_error: 'A categoria é obrigatória',
    })
    .regex(/^[\p{L}\d\s,.-]+$/u, {
      message: 'A categoria contém caracteres inválidos',
    }),

  urlImage: z
    .string({ invalid_type_error: 'A URL da imagem deve ser uma string' })
    .url({ message: 'URL da imagem inválida' })
    .optional(),

  urlExternal: z
    .string({ invalid_type_error: 'A URL deve ser uma string' })
    .url({ message: 'URL inválida' })
    .optional(),

  isActive: z
    .boolean()
    .default(true)
    .optional(),

  isFeatured: z
    .boolean()
    .default(false)
    .optional(),

  tags: z
    .array(z.string())
    .min(1, { message: 'Deve haver ao menos uma tag' }),

  organizer: z
    .string({
      invalid_type_error: 'O organizador deve ser uma string',
    })
    .optional(),
    
  value: z
    .string({
      invalid_type_error: 'O valor deve ser uma string',
    })
    .optional(),

});

export const Agenda = agendaSchema.refine(
   (data) => {
    if (data.endDate && data.eventDate) {
      return data.endDate >= data.eventDate;
    }
    return true;
  },
  {
    message: 'A data de término deve ser igual ou posterior à data de início',
    path: ['endDate'],
  },
);

export const UpdateAgenda = agendaSchema.partial().refine(
      (data) => {
    if (data.endDate !== undefined && data.eventDate !== undefined) {
      return data.endDate >= data.eventDate;
    }
    return true;
  },
  {
    message: 'A data de término deve ser igual ou posterior à data de início',
    path: ['endDate'],
  },
);
export type AgendaDTO = z.infer<typeof Agenda>;
export type UpdateAgendaDTO = z.infer<typeof UpdateAgenda>;
