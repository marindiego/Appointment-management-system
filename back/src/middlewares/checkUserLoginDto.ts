import { Request, Response, NextFunction } from 'express';
import { UserLoginDto } from '../dtos/UserLoginDto';

export const checkUserLoginDto = (req: Request, res: Response, next: NextFunction) => {
    const userData: UserLoginDto = req.body;

    if (!userData || typeof userData.username !== 'string' || typeof userData.password !== 'string') {
        return res.status(400).json({ error: 'Both username and password must be provided as strings' });
    }

    next();
};
