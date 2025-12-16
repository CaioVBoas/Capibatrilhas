import {
  userPath,
  authPath,
  districtPath,
  agendaPath,
  trailPath,
  challengePath,
  trailChallengePath,
  trailParticipationPath,
  trailInvitationPath,
  completedChallengePath,
} from './paths';

import {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  loginSchema,
  loginResponseSchema,
  districtSchema,
  districtCreateSchema,
  districtUpdateSchema,
  agendaSchema,
  agendaCreateSchema,
  agendaUpdateSchema,
  trailSchema,
  trailCreateSchema,
  trailUpdateSchema,
  challengeSchema,
  challengeCreateSchema,
  challengeUpdateSchema,
  trailChallengeSchema,
  trailChallengeCreateSchema,
  trailChallengeUpdateSchema,
  trailParticipationSchema,
  trailParticipationCreateSchema,
  trailParticipationUpdateSchema,
  trailInvitationSchema,
  trailInvitationCreateSchema,
  trailInvitationUpdateSchema,
  completedChallengeSchema,
  completedChallengeCreateSchema,
  completedChallengeUpdateSchema,
} from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Boilerplate API',
    description: 'API para as aplicações de [Projeto]',
    version: '0.0.1',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Local Server',
    },
  ],
  tags: [
    { name: 'Autenticação', description: 'Endpoints de autenticação' },
    { name: 'Usuário', description: 'Gerenciamento de usuários' },
    { name: 'Trilha', description: 'Gerenciamento de trilhas' },
    { name: 'Desafio', description: 'Gerenciamento de desafios' },
    { name: 'Desafio da Trilha', description: 'Associação entre trilhas e desafios' },
    { name: 'Participação na Trilha', description: 'Participação de usuários em trilhas' },
    { name: 'Convite para Trilha', description: 'Convites para participar de trilhas' },
    { name: 'Desafio Completado', description: 'Registro de desafios completados' },
    { name: 'Bairro em Destaque', description: 'Bairros destacados com bônus' },
    { name: 'Agenda de Eventos', description: 'Eventos culturais e turísticos' },
  ],
  paths: {
    ...authPath,
    ...userPath,
    ...trailPath,
    ...challengePath,
    ...trailChallengePath,
    ...trailParticipationPath,
    ...trailInvitationPath,
    ...completedChallengePath,
    ...districtPath,
    ...agendaPath,
  },
  components: {
    schemas: {
      user: userSchema,
      userCreate: userCreateSchema,
      userUpdate: userUpdateSchema,

      login: loginSchema,
      loginResponse: loginResponseSchema,

      district: districtSchema,
      districtCreate: districtCreateSchema,
      districtUpdate: districtUpdateSchema,

      agenda: agendaSchema,
      agendaCreate: agendaCreateSchema,
      agendaUpdate: agendaUpdateSchema,
 
      trail: trailSchema,
      trailCreate: trailCreateSchema,
      trailUpdate: trailUpdateSchema,

      challenge: challengeSchema,
      challengeCreate: challengeCreateSchema,
      challengeUpdate: challengeUpdateSchema,

      trailChallenge: trailChallengeSchema,
      trailChallengeCreate: trailChallengeCreateSchema,
      trailChallengeUpdate: trailChallengeUpdateSchema,

      trailParticipation: trailParticipationSchema,
      trailParticipationCreate: trailParticipationCreateSchema,
      trailParticipationUpdate: trailParticipationUpdateSchema,
 
      trailInvitation: trailInvitationSchema,
      trailInvitationCreate: trailInvitationCreateSchema,
      trailInvitationUpdate: trailInvitationUpdateSchema,

      completedChallenge: completedChallengeSchema,
      completedChallengeCreate: completedChallengeCreateSchema,
      completedChallengeUpdate: completedChallengeUpdateSchema,
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};
