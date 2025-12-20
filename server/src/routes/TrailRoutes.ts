import { Router } from 'express';
import { TrailController } from '../controllers';

const trailRouter = Router();

trailRouter.route('/')
  .get(TrailController.list)
  .post(TrailController.create);

trailRouter.route('/:id')
  .get(TrailController.read)
  .patch(TrailController.update)
  .delete(TrailController.delete);

trailRouter.route('/relations/user/:userId')
  .get(TrailController.getTrailsByUser);

export default trailRouter;
