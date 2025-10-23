import type { Response, NextFunction } from 'express';
import type { AuthResquest } from './auth.middleware.ts';

export const checkRoles = (roles: string[]) => {
    return (req: AuthResquest, res: Response, next: NextFunction) => {
        if(!req.user) {
            return res.status(401).json({ error: 'User not authenticated' });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Access denied: insufficient permissions' });
        }

        next();
    }
};