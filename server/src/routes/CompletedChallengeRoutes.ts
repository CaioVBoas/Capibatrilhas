import { Router } from 'express';
import { CompletedChallengeController } from '../controllers';

const completedChallengeRouter = Router();

completedChallengeRouter.route('/')
  .get(CompletedChallengeController.findAll)
  .post(CompletedChallengeController.create);

completedChallengeRouter.route('/:completedChallengeId')
  .get(CompletedChallengeController.read)
  .patch(CompletedChallengeController.update)
  .delete(CompletedChallengeController.delete);

completedChallengeRouter.route('/trail/:trailId')
  .get(CompletedChallengeController.findByTrailId);

export default completedChallengeRouter;
