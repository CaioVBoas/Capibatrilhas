import { Router } from 'express';
import TrailInvitationController from '../controllers/TrailInvitationController';

const trailInvitationRouter = Router();

trailInvitationRouter.route('/')
  .post(TrailInvitationController.create);

trailInvitationRouter.route('/:trailInvitationId')
  .get(TrailInvitationController.read)
  .patch(TrailInvitationController.update)
  .delete(TrailInvitationController.delete);

export default trailInvitationRouter;
