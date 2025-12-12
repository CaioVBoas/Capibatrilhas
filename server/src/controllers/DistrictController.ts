import { Request, Response, NextFunction } from 'express';
import { DistrictRepository, UserRepository } from '../repositories';
import { District, UpdateDistrict } from '../DTOs';

class DistrictController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const districtData = District.parse(req.body);

      const district = await DistrictRepository.create(districtData);

      res.locals = {
        status: 201,
        message: 'Bairro criado com sucesso',
        data: district,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const districtId = Number(req.params.id);

      if (isNaN(districtId)) {
        return next({
          status: 400,
          message: 'ID do bairro inválido',
        });
      }

      const district = await DistrictRepository.findById(districtId);

      if (!district) {
        return next({
          status: 404,
          message: 'Bairro não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: district,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const districtId = Number(req.params.id);
      const districtData = UpdateDistrict.parse(req.body);

      const district = await DistrictRepository.update(districtId, districtData);

      res.locals = {
        status: 200,
        data: district,
        message: 'Bairro atualizado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const districtId = Number(req.params.id);

      await DistrictRepository.delete(districtId);

      res.locals = {
        status: 200,
        message: 'Bairro deletado com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new DistrictController();
