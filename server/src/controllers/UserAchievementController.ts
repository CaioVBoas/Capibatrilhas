import { Request, Response, NextFunction } from 'express';
import UserAchievementRepository from '../repositories/userAchievementRepository';
import { CreateUserAchievement } from '../DTOs';

export class UserAchievementController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userAchievementData = CreateUserAchievement.parse(req.body);

      const userAchievement = await UserAchievementRepository.create({
        user: {
          connect: { id: userAchievementData.userId },
        },
        achievement: {
          connect: { id: userAchievementData.achievementId },
        },
        unlockedAt: userAchievementData.unlockedAt,
      });

      res.locals = {
        status: 201,
        data: userAchievement,
      };
      next();
    } catch (error) {
      next(error);
    }
  }

  async getByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const userAchievements = await UserAchievementRepository.findByUserId(
        userId,
      );

      res.locals = {
        status: 200,
        data: userAchievements,
      };
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new UserAchievementController();
