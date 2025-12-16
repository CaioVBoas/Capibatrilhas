import z from 'zod';

export const TrailInvitation = z.object({
  id: z
    .number({
      invalid_type_error: 'O ID do convite deve ser um número',
      required_error: 'O ID do convite é obrigatório',
    })
    .int('O ID do convite deve ser um número inteiro')
    .positive('O ID do convite deve ser positivo'),
  trailId: z
    .number({
      invalid_type_error: 'O ID da trilha deve ser um número',
      required_error: 'O ID da trilha é obrigatório',
    })
    .int('O ID da trilha deve ser um número inteiro')
    .positive('O ID da trilha deve ser positivo'),
  invitedEmail: z
    .string({
      invalid_type_error: 'O email do convidado deve ser uma string',
      required_error: 'O email do convidado é obrigatório',
    })
    .email('O email do convidado deve ser válido'),
  status: z.enum(['PENDENTE', 'ACEITO', 'RECUSADO'], {
    invalid_type_error: 'O status deve ser PENDENTE, ACEITO ou RECUSADO',
    required_error: 'O status é obrigatório',
  }),
});

export const CreateTrailInvitation = z.object({
  trailId: z
    .number({
      invalid_type_error: 'O ID da trilha deve ser um número',
      required_error: 'O ID da trilha é obrigatório',
    })
    .int('O ID da trilha deve ser um número inteiro')
    .positive('O ID da trilha deve ser positivo'),
  inviteeId: z
    .number({
      invalid_type_error: 'O ID do convidado deve ser um número',
      required_error: 'O ID do convidado é obrigatório',
    })
    .int('O ID do convidado deve ser um número inteiro')
    .positive('O ID do convidado deve ser positivo'),
  senderId: z
    .number({
      invalid_type_error: 'O ID do remetente deve ser um número',
      required_error: 'O ID do remetente é obrigatório',
    })
    .int('O ID do remetente deve ser um número inteiro')
    .positive('O ID do remetente deve ser positivo'),
});

export const UpdateTrailInvitation = z.object({
  status: z
    .enum(['PENDENTE', 'ACEITO', 'RECUSADO'], {
      invalid_type_error: 'O status deve ser PENDENTE, ACEITO ou RECUSADO',
    })
    .optional(),
});

export type TrailInvitationType = z.infer<typeof TrailInvitation>;
export type CreateTrailInvitationType = z.infer<typeof CreateTrailInvitation>;
export type UpdateTrailInvitationType = z.infer<typeof UpdateTrailInvitation>;
