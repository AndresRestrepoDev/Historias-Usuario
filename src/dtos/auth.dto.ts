import { z } from 'zod';

// Valida los datos de login
export const LoginDTO = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export type LoginInput = z.infer<typeof LoginDTO>;

// Valida los datos de registro
export const RegisterDTO = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
});

export type RegisterInput = z.infer<typeof RegisterDTO>;