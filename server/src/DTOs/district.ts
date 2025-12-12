import { z } from 'zod';

export const District = z.object({
  name: z
    .string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'O nome é obrigatório',
    })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .regex(/^[\p{L}\s'-]+$/u, {
      message: 'O nome contém caracteres inválidos',
    }),

  location: z
    .string({ invalid_type_error: 'A localização deve ser uma string',
              required_error: 'A localização é obrigatória',
     })
    .min(5, {message: 'Detalhe melhor a localização',})
    .regex(/^[\p{L}\d\s,.-]+$/u, {
      message: 'A localização contém caracteres inválidos',
    }),

  bonusScore: z
    .coerce.number({
      invalid_type_error: 'O bônus deve ser um número',
      required_error: 'O bônus é obrigatório',})
    .int()
    .positive({ message: 'O bônus deve ser um número positivo' }),

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

  tags: z
    .array(z.string())
    .min(1, { message: 'Deve haver ao menos uma tag' }),

  urlImage: z
    .string({ invalid_type_error: 'A URL da imagem deve ser uma string' })
    .url({ message: 'URL da imagem inválida' })
    .optional(),

  isActive: z
    .boolean()
    .default(true)
    .optional(),

});

export const UpdateDistrict = District.partial();
export type DistrictDTO = z.infer<typeof District>;
export type UpdateDistrictDTO = z.infer<typeof UpdateDistrict>;
