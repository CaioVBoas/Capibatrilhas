import { Router } from 'express';
import auth from '../middlewares/auth';
import admin from '../middlewares/admin';
import { UserController } from '../controllers';

const userRouter = Router();

userRouter.route('/').post(UserController.create);

userRouter.route('/').get([auth], UserController.list);

userRouter.route('/:userId').get(UserController.read);

// Update user profile - requires authentication
userRouter.route('/:userId').patch([auth], UserController.updateProfile);

// Update user game progress (points, level) - ADMIN ONLY
userRouter
  .route('/:userId/progress')
  .patch([admin], UserController.updateProgress);

// Change user password - requires authentication and current password
userRouter
  .route('/:userId/password')
  .patch([auth], UserController.changePassword);

userRouter.route('/:userId').delete([auth], UserController.delete);

export default userRouter;
