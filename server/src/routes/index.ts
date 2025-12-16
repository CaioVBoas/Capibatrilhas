import { Router } from 'express';

import UserRouter from './UserRoutes';
import AuthRouter from './AuthRoutes';
import FileRouter from './FileRoutes';
import MailRouter from './MailRoutes';

const router = Router();

router.use('/user', UserRouter);
router.use('/sessions', AuthRouter);
router.use('/file', FileRouter);
router.use('/mail', MailRouter);
router.route('/').get((_, res) => {
  res.status(200).send('Capibatrilhas Server is running!');
});

export default router;
