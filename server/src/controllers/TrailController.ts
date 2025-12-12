import { Request, Response, NextFunction } from 'express';
import { TrailRepository } from '../repositories';
import { Trail, UpdateTrail } from '../DTOs';

class TrailController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const trailData = Trail.parse(req.body);

      const ownerId = Number(req.user?.id); // ajustar de acordo com o middleware de autenticação

      if (!ownerId) {
        return next({
          status: 401,
          message: 'Usuário não autenticado',
        });
      }

        const challenges = trailData.challenges?.map((id) => ({
            challenge: { connect: { id: id } },
        }));

      if (!challenges || challenges.length === 0) {
        return next({
          status: 400,
          message: 'A trilha deve conter pelo menos um desafio',
        });
      }

      const trailDataFinalized = {
        ...trailData,
        ownerId,
        challenges,
        };

      const trail = await TrailRepository.create(trailDataFinalized);

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

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const trailId = Number(req.params.id);

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

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const trailId = Number(req.params.id);
      const trailData = UpdateTrail.parse(req.body);
      

      if (isNaN(trailId)) {
        return next({
          status: 400,
          message: 'ID da trilha inválido',
        });
      }

      const trail = await TrailRepository.update(trailId, trailData);

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

      if (isNaN(trailId)) {
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
