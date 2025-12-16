import {  Request, Response, NextFunction } from 'express';
import { TrailChallenge, UpdateTrailChallenge } from '../DTOs';
import TrailChallengeRepository from '../repositories/trailChallengeRepository';

class TrailChallengeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailId, challengeId, challengeOrder } = TrailChallenge.parse(req.body);
      
      const trailChallenge = await TrailChallengeRepository.create({
        trail: { connect: { id: trailId } },
        challenge: { connect: { id: challengeId } },
        challengeOrder,
      });
        res.locals = {
        status: 201,
        message: 'Desafio da trilha criado com sucesso',
        data: trailChallenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailChallengeId } = req.params;

      const trailChallenge = await TrailChallengeRepository.findById(trailChallengeId);

      if (!trailChallenge) {
        return next({
          status: 404,
          message: 'Desafio da trilha não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: trailChallenge,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findChallengesByTrail(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailId } = req.params;

      const trailChallenges = await TrailChallengeRepository.findByTrailId(trailId);

      res.locals = {
        status: 200,
        data: trailChallenges,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const trailChallenges = await TrailChallengeRepository.findAll();

      res.locals = {
        status: 200,
        data: trailChallenges,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailChallengeId } = req.params;
      const updateData = UpdateTrailChallenge.parse(req.body);

      const prismaData: any = {};
      if (updateData.trailId !== undefined) {
        prismaData.trail = { connect: { id: updateData.trailId } };
      }
      if (updateData.challengeId !== undefined) {
        prismaData.challenge = { connect: { id: updateData.challengeId } };
      }
      if (updateData.challengeOrder !== undefined) {
        prismaData.challengeOrder = updateData.challengeOrder;
      }

      const trailChallenge = await TrailChallengeRepository.update(
        trailChallengeId,
        prismaData,
      );

      res.locals = {
        status: 200,
        data: trailChallenge,
        message: 'Desafio da trilha atualizado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailChallengeId } = req.params;

      await TrailChallengeRepository.delete(trailChallengeId);

      res.locals = {
        status: 200,
        message: 'Desafio da trilha deletado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new TrailChallengeController();