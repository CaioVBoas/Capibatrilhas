import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { TrailRepository } from '../repositories';
import { Trail, UpdateTrail } from '../DTOs';

class TrailController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const trailData = Trail.parse(req.body);

      // ownerId is optional - if not provided, creates a public trail
      // TODO: Get ownerId from authenticated user token when auth middleware is updated
      const ownerId = req.body.ownerId ? Number(req.body.ownerId) : null;

      if (ownerId !== null && Number.isNaN(ownerId)) {
        return next({
          status: 400,
          message: 'ID do proprietário inválido',
        });
      }

      const trail = await TrailRepository.create({
        title: trailData.title,
        description: trailData.description,
        theme: trailData.theme,
        startDate: trailData.startDate,
        endDate: trailData.endDate,
        totalRewards: trailData.totalRewards,
        ...(ownerId && { owner: { connect: { id: ownerId } } }),
        challenges: {
          create: trailData.challenges.map((id, index) => ({
            challenge: { connect: { id } },
            challengeOrder: index,
          })),
        },
      });

      res.locals = {
        status: 201,
        message: 'Trilha criada',
        data: trail,
      };
      
      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const trails = await TrailRepository.findAll();

      res.locals = {
        status: 200,
        data: trails,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const trailId = Number(req.params.id);

      if (Number.isNaN(trailId)) {
        return next({
          status: 400,
          message: 'ID da trilha inválido',
        });
      }

      const trail = await TrailRepository.findById(trailId);

      if (!trail) {
        return next({
          status: 404,
          message: 'Trilha não encontrada',
        });
      }

      res.locals = {
        status: 200,
        data: trail,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getTrailsByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);

      if (Number.isNaN(userId)) {
        return next({
          status: 400,
          message: 'ID do usuário inválido',
        });
      }

      const trails = await TrailRepository.findByUserId(userId);

      res.locals = {
        status: 200,
        data: trails,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const trailId = Number(req.params.id);
      const trailData = UpdateTrail.parse(req.body);

      if (Number.isNaN(trailId)) {
        return next({
          status: 400,
          message: 'ID da trilha inválido',
        });
      }

      const updateData: Prisma.TrailUpdateInput = {
        title: trailData.title,
        description: trailData.description,
        theme: trailData.theme,
        startDate: trailData.startDate,
        endDate: trailData.endDate,
        totalRewards: trailData.totalRewards,
      };

      if (trailData.challenges) {
        updateData.challenges = {
          deleteMany: {},
          create: trailData.challenges.map((id: number, index: number) => ({
            challenge: { connect: { id } },
            challengeOrder: index,
          })),
        };
      }

      const trail = await TrailRepository.update(trailId, updateData);
      res.locals = {
        status: 200,
        data: trail,
        message: 'Trilha atualizada',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const trailId = Number(req.params.id);

      if (Number.isNaN(trailId)) {
        return next({
          status: 400,
          message: 'ID da trilha inválido',
        });
      }

      await TrailRepository.delete(trailId);

      res.locals = {
        status: 200,
        message: 'Trilha deletada',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new TrailController();
