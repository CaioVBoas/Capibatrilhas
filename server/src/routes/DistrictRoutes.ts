import { Router } from 'express';
import { DistrictController } from '../controllers';

const districtRouter = Router();

districtRouter.route('/')
  .get(DistrictController.list)
  .post(DistrictController.create);

districtRouter.route('/:id')
  .get(DistrictController.read)
  .patch(DistrictController.update)
  .delete(DistrictController.delete);

export default districtRouter;
