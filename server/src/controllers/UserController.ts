import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';
import { UserRepository } from '../repositories';
import { User, UpdateUser } from '../DTOs';

class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = User.parse(req.body);

      const existsUserWithEmail = await UserRepository.findByEmail(
        userData.email,
      );

      if (existsUserWithEmail) {
        return next({
          status: 400,
          message: 'Este email já está registrado',
        });
      }

      const existsUserWithCpf = await UserRepository.findByCpf(userData.cpf);

      if (existsUserWithCpf) {
        return next({
          status: 400,
          message: 'Este CPF já está registrado',
        });
      }

      const userDataWithHashedPassword = {
        ...userData,
        password: await hash(userData.password, 12),
      };

      const user = await UserRepository.create(userDataWithHashedPassword);

      res.locals = {
        status: 201,
        message: 'Usuário criado',
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);

      const user = await UserRepository.findById(userId);

      if (!user) {
        return next({
          status: 404,
          message: 'Usuário não encontrado',
        });
      }

      res.locals = {
        status: 200,
        data: user,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserRepository.findAll();

      res.locals = {
        status: 200,
        data: users,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const userData = UpdateUser.parse(req.body);

      const user = await UserRepository.update(userId, userData);

      res.locals = {
        status: 200,
        data: user,
        message: 'Usuário atualizado',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);

      await UserRepository.delete(userId);

      res.locals = {
        status: 200,
        message: 'Usuário deletado',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new UserController();
