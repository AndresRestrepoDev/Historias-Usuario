import { z } from 'zod';

export const ClientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  user_id: z.number().int().positive("User ID must be a positive integer"),
});

export type ClientDTO = z.infer<typeof ClientSchema>;
