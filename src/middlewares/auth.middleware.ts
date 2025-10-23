import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export interface AuthResquest extends Request {
  user?: any;
}

export const verifyRefreshToken = (req: AuthResquest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token required' });
  }

  const token = authHeader.split(' ')[1];

  if(!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_REFRESH as string);
    req.user = decoded;

  } catch (err) {
    return res.status(401).json({ error: 'Invalid access token' });
  }

  next();
};
