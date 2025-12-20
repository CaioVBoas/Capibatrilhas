import { Router } from 'express';
import { ChallengeController } from '../controllers';

const challengeRouter = Router();

challengeRouter.route('/')
  .get(ChallengeController.findAll)
  .post(ChallengeController.create);

challengeRouter.route('/:challengeId')
  .get(ChallengeController.read)
  .patch(ChallengeController.update)
  .delete(ChallengeController.delete);

export default challengeRouter;
