import type { Request, Response } from 'express';
import { User } from '../models/user.model.ts';
import { z } from 'zod';
import { registerUserService } from '../services/auth.service.ts';
import { loginUserService } from '../services/auth.service.ts';
import { refreshTokenService } from '../services/auth.service.ts';

const registerSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerUser = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const {email} = validatedData;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const newUser = await registerUserService(validatedData);
    res.status(201).json({ message: 'User registered successfully', userId: newUser.id });
  } catch (error) {
    res.status(400).json({ error: error instanceof z.ZodError ? error.issues : 'Registration failed' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);

    const tokens = await loginUserService(validatedData);
    
    if(!tokens) {
      return  res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', tokens, validatedData });
  } catch (error) {
    res.status(400).json({ error: error instanceof z.ZodError ? error.issues : 'Login failed' });
  }
};


export const refreshToken = async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const newTokens = await refreshTokenService(token!);

  if (!newTokens) {
    return res.status(403).json({ error: 'Invalid or expired refresh token' });
  }

  return res.status(200).json({
    message: 'Tokens refreshed successfully',
    tokens: newTokens
  });
};
