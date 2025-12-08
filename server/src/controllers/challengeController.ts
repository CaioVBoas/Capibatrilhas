/* eslint-disable import/no-cycle */
import { Request, Response, NextFunction } from 'express';
import { Challenge, UpdateChallenge } from '../DTOs';
import ChallengeRepository from '../repositories/challengeRepository';

class ChallengeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const challengeData = Challenge.parse(req.body);

      const challenge = await ChallengeRepository.create(challengeData);

      res.locals = {
        status: 201,
        message: 'Challenge created',
        data: challenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { challengeId } = req.params;

      const challenge = await ChallengeRepository.findById(challengeId);

      if (!challenge) {
        return next({
          status: 404,
          message: 'Challenge not found',
        });
      }

      res.locals = {
        status: 200,
        data: challenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const challenges = await ChallengeRepository.findAll();

      res.locals = {
        status: 200,
        data: challenges,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { challengeId } = req.params;
      const challengeData = UpdateChallenge.parse(req.body);

      const challenge = await ChallengeRepository.update(
        challengeId,
        challengeData,
      );

      res.locals = {
        status: 200,
        data: challenge,
        message: 'Challenge updated',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { challengeId } = req.params;

      await ChallengeRepository.delete(challengeId);

      res.locals = {
        status: 200,
        message: 'Challenge deleted',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new ChallengeController();
