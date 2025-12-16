import { Request, Response, NextFunction } from 'express';
import {
  CreateCompletedChallenge,
  UpdateCompletedChallenge,
} from '../DTOs/CompletedChallenge';
import completeChallengeRepository from '../repositories/completedChallengeRepository';

class CompletedChallengeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, challengeId, trailId, rewardsEarned } =
        CreateCompletedChallenge.parse(req.body);

      const completedChallenge = await completeChallengeRepository.create({
        user: { connect: { id: userId } },
        challenge: { connect: { id: challengeId } },
        trail: { connect: { id: trailId } },
        rewardsEarned,
      });

      res.locals = {
        status: 201,
        message: 'Desafio completado com sucesso',
        data: completedChallenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { completedChallengeId } = req.params;

      const completedChallenge = await completeChallengeRepository.findById(
        completedChallengeId,
      );

      if (!completedChallenge) {
        return next({
          status: 404,
          message: 'Desafio completo não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: completedChallenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { completedChallengeId } = req.params;
      const { rewardsEarned } = UpdateCompletedChallenge.parse(req.body);

      const completedChallenge = await completeChallengeRepository.update(
        completedChallengeId,
        {
          rewardsEarned,
        },
      );

      res.locals = {
        status: 200,
        message: 'Desafio completo atualizado com sucesso',
        data: completedChallenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { completedChallengeId } = req.params;

      await completeChallengeRepository.delete(completedChallengeId);

      res.locals = {
        status: 200,
        message: 'Desafio completo deletado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const completedChallenges = await completeChallengeRepository.findAll();

      res.locals = {
        status: 200,
        data: completedChallenges,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findByTrailId(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailId } = req.params;

      const completedChallenges =
        await completeChallengeRepository.findByTrailId(Number(trailId));

      res.locals = {
        status: 200,
        data: completedChallenges,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new CompletedChallengeController();
