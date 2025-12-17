import { Router } from 'express';

import UserRouter from './UserRoutes';
import AuthRouter from './AuthRoutes';
import FileRouter from './FileRoutes';
import MailRouter from './MailRoutes';
import DistrictRouter from './DistrictRoutes';
import AgendaRouter from './AgendaRoutes';
import TrailRouter from './TrailRoutes';
import ChallengeRouter from './ChallengeRoutes';
import TrailChallengeRouter from './TrailChallengeRoutes';
import TrailParticipationRouter from './TrailParticipationRoutes';
import TrailInvitationRouter from './TrailInvitationRoutes';
import CompletedChallengeRouter from './CompletedChallengeRoutes';

const router = Router();

router.use('/user', UserRouter);
router.use('/sessions', AuthRouter);
router.use('/file', FileRouter);
router.use('/mail', MailRouter);
router.use('/district', DistrictRouter);
router.use('/agenda', AgendaRouter);
router.use('/trail', TrailRouter);
router.use('/challenge', ChallengeRouter);
router.use('/trail-challenge', TrailChallengeRouter);
router.use('/trail-participation', TrailParticipationRouter);
router.use('/trail-invitation', TrailInvitationRouter);
router.use('/completed-challenge', CompletedChallengeRouter);

router.route('/').get((_, res) => {
  res.status(200).send('Capibatrilhas Server is running!');
});

export default router;
