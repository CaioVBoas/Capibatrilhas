import { Router } from 'express';
import TrailParticipationController from '../controllers/TrailParticipationController';

const trailParticipationRouter = Router();

trailParticipationRouter.route('/')
  .get(TrailParticipationController.findAll)
  .post(TrailParticipationController.create);

trailParticipationRouter.route('/:trailParticipationId')
  .get(TrailParticipationController.read)
  .patch(TrailParticipationController.update)
  .delete(TrailParticipationController.delete);

export default trailParticipationRouter;
