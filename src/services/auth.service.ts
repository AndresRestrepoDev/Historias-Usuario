import { User } from "../models/user.model.ts";
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { UserDAO } from '../dao/user.dao.ts';
import type { RegisterInput, LoginInput } from '../dtos/auth.dto.ts';

export const registerUserService = async (validateData: RegisterInput) => {
    
    const newUser = await User.create({
      name: validateData.name,
      email: validateData.email,
      password: validateData.password,
    });
  
    return newUser;
};

export const loginUserService = async (validateData: LoginInput) => {

    const user = await UserDAO.findByEmail(validateData.email);

    if (!user || user.password !== validateData.password) {
      return false;
    }

    if(!process.env.JWT_SECRET || !process.env.JWT_SECRET_REFRESH) {
      throw new Error('JWT_SECRET is not defined');
    }

    const accesToken = jwt.sign(
        { id: user.id, email: user.email, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET_REFRESH!,
        { expiresIn: '7d' }
    );

    await UserDAO.updateRefreshToken(user.id, refreshToken);

    const tokens = {
        accesToken, refreshToken
    }

    return tokens;
};

export const refreshTokenService = async (token: string) => {
  if (!process.env.JWT_SECRET_REFRESH || !process.env.JWT_SECRET) {
    throw new Error('JWT secrets not defined');
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET_REFRESH);

    // Verificamos si el usuario aún existe
    const user = await User.findByPk(decoded.id);
    if (!user) {
      throw new Error('User not found');
    }

    const newAccessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const newRefreshToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET_REFRESH,
      { expiresIn: '7d' }
    );

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    console.error('[Auth] Refresh token error:', error);
    return null;
  }
};