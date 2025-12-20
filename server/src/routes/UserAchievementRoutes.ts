import Router from 'express';
import UserAchievementController from '../controllers/UserAchievementController';

const userAchievementRouter = Router();

userAchievementRouter.route('/').post(UserAchievementController.create);

userAchievementRouter
  .route('/user/:id')
  .get(UserAchievementController.getByUserId);

export default userAchievementRouter;
