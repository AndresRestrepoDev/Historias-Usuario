import type { Request, Response, NextFunction } from 'express';
import type { ZodTypeAny } from 'zod';

export const validate = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.format();
      return res.status(400).json({ errors });
    }
    next();
  };
};
