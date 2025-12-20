import z from 'zod';

export const CreateWalletTransaction = z.object({
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int({ message: 'O ID do usuário deve ser um número inteiro' })
    .positive({ message: 'O ID do usuário deve ser positivo' }),
  amount: z
    .number({
      invalid_type_error: 'O valor da transação deve ser um número',
      required_error: 'O valor da transação é obrigatório',
    })
    .int({ message: 'O valor da transação deve ser um número inteiro' }),
  description: z
    .string({
      invalid_type_error: 'A descrição deve ser uma string',
      required_error: 'A descrição é obrigatória',
    })
    .min(1, { message: 'A descrição não pode estar vazia' })
    .max(200, { message: 'A descrição deve ter no máximo 200 caracteres' }),
  transactionDate: z
    .date({
      invalid_type_error: 'A data da transação deve ser uma data válida',
    })
    .optional(),
});

export const WalletTransaction = z.object({
  id: z
    .number({
      invalid_type_error: 'O ID da transação deve ser um número',
      required_error: 'O ID da transação é obrigatório',
    })
    .int({ message: 'O ID da transação deve ser um número inteiro' })
    .positive({ message: 'O ID da transação deve ser positivo' }),
  userId: z
    .number({
      invalid_type_error: 'O ID do usuário deve ser um número',
      required_error: 'O ID do usuário é obrigatório',
    })
    .int({ message: 'O ID do usuário deve ser um número inteiro' })
    .positive({ message: 'O ID do usuário deve ser positivo' }),
  amount: z
    .number({
      invalid_type_error: 'O valor da transação deve ser um número',
      required_error: 'O valor da transação é obrigatório',
    })
    .int({ message: 'O valor da transação deve ser um número inteiro' }),
  description: z
    .string({
      invalid_type_error: 'A descrição deve ser uma string',
      required_error: 'A descrição é obrigatória',
    })
    .min(1, { message: 'A descrição não pode estar vazia' })
    .max(200, { message: 'A descrição deve ter no máximo 200 caracteres' }),
  transactionDate: z.date({
    invalid_type_error: 'A data da transação deve ser uma data válida',
    required_error: 'A data da transação é obrigatória',
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

export const UpdateWalletTransaction = WalletTransaction.partial();
export type CreateWalletTransactionDTO = z.infer<
  typeof CreateWalletTransaction
>;
export type WalletTransactionDTO = z.infer<typeof WalletTransaction>;
export type UpdateWalletTransactionDTO = z.infer<
  typeof UpdateWalletTransaction
>;
