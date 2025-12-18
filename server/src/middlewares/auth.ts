import { Request, Response, NextFunction } from 'express';
import TokenRepository from '../repositories/tokenRepository';

// Extend Express Request to include userId
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Request {
      userId?: number;
    }
  }
}

export default async function auth(
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
    req.userId = decoded.id; // Attach user ID to request
    return next();
  } catch (error: any) {
    return res.status(401).send({ error: error.message });
  }
}
