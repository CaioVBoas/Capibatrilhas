import { z } from 'zod';

export const User = z.object({
  name: z
    .string({
      invalid_type_error: 'O nome deve ser uma string',
      required_error: 'O nome é obrigatório',
    })
    .min(2, { message: 'O nome deve ter no mínimo 2 caracteres' })
    .regex(/^[\p{L}\s'-]+$/u, {
      message: 'O nome contém caracteres inválidos',
    }),

  phone: z
    .string({ invalid_type_error: 'O número de telefone deve ser uma string' })
    .regex(/^\d{11}$/, {
      message:
        'O número de telefone deve conter exatamente 11 dígitos numéricos',
    })
    .optional(),

  email: z
    .string({
      invalid_type_error: 'O email deve ser uma string',
      required_error: 'O email é obrigatório',
    })
    .email({ message: 'Endereço de email inválido' }),

  password: z
    .string({
      invalid_type_error: 'A senha deve ser uma string',
      required_error: 'A senha é obrigatória',
    })
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' }),

  cpf: z
    .string({ invalid_type_error: 'O CPF deve ser uma string' })
    .regex(/^\d{11}$/, {
      message: 'O CPF deve conter exatamente 11 dígitos numéricos',
    }) // Valida se o CPF possui exatamente 11 dígitos numéricos
    .transform((val) => val.replace(/\D/g, '')),

  urlImage: z
    .string({ invalid_type_error: 'A URL da imagem deve ser uma string' })
    .url({ message: 'URL da imagem inválida' })
    .optional(),

  birthDate: z
    .string({ invalid_type_error: 'A data de nascimento deve ser uma string' })
    .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, {
      message: 'A data de nascimento deve estar no formato AAAA-MM-DD',
    }) // Valida se o formato é AAAA-MM-DD e possui apenas datas válidas
    .optional(),

  zipCode: z
    .string({ invalid_type_error: 'O CEP deve ser uma string' })
    .regex(/^\d{5}-?\d{3}$/, {
      message:
        'O CEP deve conter exatamente 8 dígitos numéricos, com ou sem hífen',
    }) // Valida se o CEP possui 8 dígitos numéricos, com ou sem hífen
    .optional(),

  state: z
    .preprocess(
      (val) => (typeof val === 'string' ? val.toUpperCase() : val),
      z
        .string({ invalid_type_error: 'O estado deve ser uma string' })
        .length(2, { message: 'O estado deve ter 2 letras' })
        .regex(/^[A-Z]{2}$/, { message: 'O estado deve conter apenas letras' }),
    )
    .optional(),

  city: z
    .string({ invalid_type_error: 'A cidade deve ser uma string' })
    .min(2, { message: 'O bairro deve ter no mínimo 2 caracteres' })
    .regex(/^[\p{L}\s]+$/u, { message: 'A cidade deve conter apenas letras' })
    .optional(),

  district: z
    .string({ invalid_type_error: 'O bairro deve ser uma string' })
    .min(2, { message: 'O bairro deve ter no mínimo 2 caracteres' })
    .optional(),

  street: z
    .string({ invalid_type_error: 'A rua deve ser uma string' })
    .min(2, { message: 'A rua deve ter no mínimo 2 caracteres' })
    .optional(),

  number: z
    .string({ invalid_type_error: 'O número deve ser uma string' })
    .min(1, { message: 'O número deve ter no mínimo 1 caractere' })
    .optional(),

  complement: z
    .string({ invalid_type_error: 'O complemento deve ser uma string' })
    .optional(),
});

// DTO for updating user profile (excludes password, points, level, isAdmin)
export const UpdateUserProfile = User.pick({
  name: true,
  phone: true,
  urlImage: true,
  birthDate: true,
  zipCode: true,
  state: true,
  city: true,
  district: true,
  street: true,
  number: true,
  complement: true,
}).partial();

// DTO for updating game progress (admin/system only)
export const UpdateUserProgress = z.object({
  points: z.number({
    invalid_type_error: 'Os pontos devem ser um número',
  }).int({ message: 'Os pontos devem ser um número inteiro' }).min(0, { message: 'Os pontos não podem ser negativos' }).optional(),
  
  level: z.number({
    invalid_type_error: 'O nível deve ser um número',
  }).int({ message: 'O nível deve ser um número inteiro' }).min(1, { message: 'O nível deve ser no mínimo 1' }).optional(),
});

// DTO for changing password (requires current password verification)
export const ChangePassword = z.object({
  currentPassword: z.string({
    invalid_type_error: 'A senha atual deve ser uma string',
    required_error: 'A senha atual é obrigatória',
  }),
  newPassword: z.string({
    invalid_type_error: 'A nova senha deve ser uma string',
    required_error: 'A nova senha é obrigatória',
  }).min(8, { message: 'A nova senha deve ter no mínimo 8 caracteres' }),
});

export const UpdateUser = User.partial();
export type IUser = z.infer<typeof User>;
export type IUpdateUser = z.infer<typeof UpdateUser>;
export type IUpdateUserProfile = z.infer<typeof UpdateUserProfile>;
export type IUpdateUserProgress = z.infer<typeof UpdateUserProgress>;
export type IChangePassword = z.infer<typeof ChangePassword>;