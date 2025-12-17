import { Router } from 'express';
import { TrailChallengeController } from '../controllers';

const trailChallengeRouter = Router();

trailChallengeRouter.route('/')
  .get(TrailChallengeController.findAll)
  .post(TrailChallengeController.create);

trailChallengeRouter.route('/:trailChallengeId')
  .get(TrailChallengeController.read)
  .patch(TrailChallengeController.update)
  .delete(TrailChallengeController.delete);

trailChallengeRouter.route('/trail/:trailId')
  .get(TrailChallengeController.findChallengesByTrail);

export default trailChallengeRouter;
