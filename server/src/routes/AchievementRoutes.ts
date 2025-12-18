import { Router } from 'express';
import AchievementController from '../controllers/AchievementController';

const achievementRouter = Router();

achievementRouter.route('/').post(AchievementController.create);

achievementRouter.route('/:id').get(AchievementController.getById);

achievementRouter.route('/').get(AchievementController.getAll);

achievementRouter.route('/:id').patch(AchievementController.update);

achievementRouter.route('/:id').delete(AchievementController.delete);

export default achievementRouter;
