import { Request, Response, NextFunction } from 'express';
import AchievementRepository from '../repositories/achievementRepository';
import { CreateAchievement, UpdateAchievement } from '../DTOs';

export class AchievementController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const achievementData = CreateAchievement.parse(req.body);

      const achievement = await AchievementRepository.create({
        title: achievementData.title,
        description: achievementData.description,
        criteria: achievementData.criteria,
        isActive: achievementData.isActive,
      });

      res.locals = {
        status: 201,
        data: achievement,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const achievementId = Number(req.params.id);

      const achievement = await AchievementRepository.findById(achievementId);

      if (!achievement) {
        return next({
          status: 404,
          message: 'Achievement not found',
        });
      }

      res.locals = {
        status: 200,
        data: achievement,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const achievements = await AchievementRepository.findAll();

      res.locals = {
        status: 200,
        data: achievements,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const achievementId = Number(req.params.id);
      const achievementData = UpdateAchievement.parse(req.body);

      const achievement = await AchievementRepository.update(achievementId, {
        title: achievementData.title,
        description: achievementData.description,
        criteria: achievementData.criteria,
        isActive: achievementData.isActive,
      });

      res.locals = {
        status: 200,
        data: achievement,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const achievementId = Number(req.params.id);

      const achievement = await AchievementRepository.delete(achievementId);

      res.locals = {
        status: 200,
        data: achievement,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new AchievementController();
