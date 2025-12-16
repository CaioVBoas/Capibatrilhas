import z from 'zod';

export const TrailChallenge = z.object({
  trailId: z.number({
    invalid_type_error: 'O ID da trilha deve ser um número',
    required_error: 'O ID da trilha é obrigatório',
  }).int().positive(),

  challengeId: z.number({
    invalid_type_error: 'O ID do desafio deve ser um número',
    required_error: 'O ID do desafio é obrigatório',
  }).int().positive(),

  challengeOrder: z.number({
    invalid_type_error: 'A ordem do desafio deve ser um número',
    required_error: 'A ordem do desafio é obrigatória',
  }).int().positive(),
});

export const UpdateTrailChallenge = TrailChallenge.partial();
