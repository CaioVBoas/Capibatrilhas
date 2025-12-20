import jwt from 'jsonwebtoken';

class TokenRepository {
  generateAccessToken(id: number, expiresIn: string | number) {
    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) {
      throw new Error('JWT_ACCESS_SECRET is not defined');
    }

    const generatedToken = jwt.sign({ id }, secret, {
      expiresIn,
    } as jwt.SignOptions);

    return generatedToken;
  }

  generateRefreshToken(id: number, expiresIn: string | number) {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      throw new Error('JWT_REFRESH_SECRET is not defined');
    }

    const generatedToken = jwt.sign({ id }, secret, {
      expiresIn,
    } as jwt.SignOptions);

    return generatedToken;
  }

  verifyAccessToken(token: string): jwt.JwtPayload {
    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) {
      throw new Error('JWT_ACCESS_SECRET is not defined');
    }

    try {
      const verifiedToken = jwt.verify(token, secret) as jwt.JwtPayload;
      return verifiedToken;
    } catch (error) {
      throw new Error(`Access token verification failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  verifyRefreshToken(token: string): jwt.JwtPayload {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      throw new Error('JWT_REFRESH_SECRET is not defined');
    }

    try {
      const verifiedToken = jwt.verify(token, secret) as jwt.JwtPayload;
      return verifiedToken;
    } catch (error) {
      throw new Error(`Refresh token verification failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

export default new TokenRepository();