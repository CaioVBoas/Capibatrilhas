import { Request, Response, NextFunction } from 'express';
import TokenRepository from '../repositories/tokenRepository';
import UserRepository from '../repositories/userRepository';

export default async function admin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return next({
        status: 401,
        message: 'Unauthorized.',
      });
    }

    const [, token] = authToken.split(' ');
    const decoded = TokenRepository.verifyAccessToken(token);
    
    const user = await UserRepository.findById(decoded.id);

    if (!user || !user.isAdmin) {
      return next({
        status: 403,
        message: 'Acesso negado. Apenas administradores podem acessar este recurso.',
      });
    }

    return next();
  } catch (error: any) {
    return res.status(401).send({ error: error.message });
  }
}
