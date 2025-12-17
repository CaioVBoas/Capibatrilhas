import { Router } from 'express';
import { AgendaController } from '../controllers';

const agendaRouter = Router();

agendaRouter.route('/')
  .get(AgendaController.list)
  .post(AgendaController.create);

agendaRouter.route('/:id')
  .get(AgendaController.read)
  .patch(AgendaController.update)
  .delete(AgendaController.delete);

export default agendaRouter;
