import { Request, Response, NextFunction } from 'express';
import { hash, compare } from 'bcryptjs';
import { UserRepository } from '../repositories';
import {
  User,
  UpdateUserProfile,
  UpdateUserProgress,
  ChangePassword,
} from '../DTOs';

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

      // Remove sensitive fields from response
      const {
        password,
        cpf,
        email,
        phone,
        zipCode,
        state,
        city,
        district,
        street,
        complement,
        number,
        ...sanitizedUser
      } = user;

      res.locals = {
        status: 201,
        message: 'Usuário criado',
        data: sanitizedUser,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);

      const user = await UserRepository.findById(userId);

      if (!user) {
        return next({
          status: 404,
          message: 'Usuário não encontrado',
        });
      }

      // Remove sensitive fields from response
      const {
        password,
        cpf,
        email,
        phone,
        zipCode,
        state,
        city,
        district,
        street,
        complement,
        number,
        ...sanitizedUser
      } = user;

      res.locals = {
        status: 200,
        data: sanitizedUser,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserRepository.findAll();

      // Remove sensitive fields from response
      const sanitizedUsers = users.map(
        ({
          password,
          cpf,
          email,
          phone,
          zipCode,
          state,
          city,
          district,
          street,
          complement,
          number,
          ...user
        }) => user,
      );

      res.locals = {
        status: 200,
        data: sanitizedUsers,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async findByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { userEmail } = req.params;

      const user = await UserRepository.findByEmail(userEmail);

      if (!user) {
        return next({
          status: 404,
          message: 'Usuário não encontrado',
        });
      }

      // Remove sensitive fields from response
      const {
        password,
        cpf,
        email,
        phone,
        zipCode,
        state,
        city,
        district,
        street,
        complement,
        number,
        ...sanitizedUser
      } = user;

      res.locals = {
        status: 200,
        data: sanitizedUser,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);

      if (Number.isNaN(userId)) {
        return next({
          status: 400,
          message: 'ID do usuário inválido',
        });
      }

      const userData = UpdateUserProfile.parse(req.body);

      const user = await UserRepository.update(userId, userData);

      // Remove sensitive fields from response
      const {
        password,
        cpf,
        email,
        phone,
        zipCode,
        state,
        city,
        district,
        street,
        complement,
        number,
        ...sanitizedUser
      } = user;

      res.locals = {
        status: 200,
        data: sanitizedUser,
        message: 'Perfil atualizado',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async updateProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);

      if (Number.isNaN(userId)) {
        return next({
          status: 400,
          message: 'ID do usuário inválido',
        });
      }

      const progressData = UpdateUserProgress.parse(req.body);

      const user = await UserRepository.update(userId, progressData);

      // Remove sensitive fields from response
      const {
        password,
        cpf,
        email,
        phone,
        zipCode,
        state,
        city,
        district,
        street,
        complement,
        number,
        ...sanitizedUser
      } = user;

      res.locals = {
        status: 200,
        data: sanitizedUser,
        message: 'Progresso atualizado',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);
      const authenticatedUserId = req.userId;

      // Users can only change their own password
      if (authenticatedUserId !== userId) {
        return next({
          status: 403,
          message: 'Você só pode alterar sua própria senha',
        });
      }

      const passwordData = ChangePassword.parse(req.body);

      // Get current user data
      const user = await UserRepository.findById(userId);

      if (!user) {
        return next({
          status: 404,
          message: 'Usuário não encontrado',
        });
      }

      // Verify current password
      const isPasswordValid = await compare(
        passwordData.currentPassword,
        user.password,
      );

      if (!isPasswordValid) {
        return next({
          status: 401,
          message: 'Senha atual incorreta',
        });
      }

      // Hash new password
      const hashedPassword = await hash(passwordData.newPassword, 12);

      // Update password
      await UserRepository.update(userId, { password: hashedPassword });

      res.locals = {
        status: 200,
        message: 'Senha alterada com sucesso',
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.userId);

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
