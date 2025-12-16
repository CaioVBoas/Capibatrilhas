import { Request, Response, NextFunction } from 'express';
import { TrailParticipation, UpdateTrailParticipation } from '../DTOs';
import TrailParticipationRepository from '../repositories/trailParticipationRepository';

class TrailParticipationController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, trailId, progress, isCompleted } =
        TrailParticipation.parse(req.body);

      const prismaData: any = {
        user: { connect: { id: userId } },
        trail: { connect: { id: trailId } },
      };

      if (progress !== undefined) {
        prismaData.progress = progress;
      }
      if (isCompleted !== undefined) {
        prismaData.isCompleted = isCompleted;
      }

      const trailParticipation = await TrailParticipationRepository.create(
        prismaData,
      );
      res.locals = {
        status: 201,
        message: 'Participação na Trilha criada',
        data: trailParticipation,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailParticipationId } = req.params;

      const trailParticipation = await TrailParticipationRepository.findById(
        trailParticipationId,
      );

      if (!trailParticipation) {
        return next({
          status: 404,
          message: 'Participação na Trilha não encontrada',
        });
      }

      res.locals = {
        status: 200,
        data: trailParticipation,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const trailParticipations = await TrailParticipationRepository.findAll();

      res.locals = {
        status: 200,
        data: trailParticipations,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailParticipationId } = req.params;
      const updateData = UpdateTrailParticipation.parse(req.body);

      const prismaData: any = {};
      if (updateData.userId !== undefined) {
        prismaData.user = { connect: { id: updateData.userId } };
      }
      if (updateData.trailId !== undefined) {
        prismaData.trail = { connect: { id: updateData.trailId } };
      }
      if (updateData.progress !== undefined) {
        prismaData.progress = updateData.progress;
      }
      if (updateData.isCompleted !== undefined) {
        prismaData.isCompleted = updateData.isCompleted;
      }

      const trailParticipation = await TrailParticipationRepository.update(
        trailParticipationId,
        prismaData,
      );

      res.locals = {
        status: 200,
        data: trailParticipation,
        message: 'Participação na Trilha atualizada',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { trailParticipationId } = req.params;

      await TrailParticipationRepository.delete(trailParticipationId);

      res.locals = {
        status: 200,
        message: 'Participação na Trilha deletada',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new TrailParticipationController();
