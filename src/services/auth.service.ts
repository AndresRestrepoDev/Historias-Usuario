import { User } from "../models/user.model.ts";

export const registerUserService = async (validateData: { name: string; password: string; email: string }) => {
    
    const newUser = await User.create({
      name: validateData.name,
      email: validateData.email,
      password: validateData.password,
    });
  
    return newUser;
};

export const loginUserService = async (validateData: { email: string; password: string }) => {
  
    const user = await User.findOne({ where: { email: validateData.email } });

    if (!user || user.password !== validateData.password) {
      return false;
    }

    return true;
};