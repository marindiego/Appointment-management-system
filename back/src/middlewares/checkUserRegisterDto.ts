import { Request, Response, NextFunction } from 'express';
import { UserDto } from '../dtos/UserDTO';

const checkRequiredFields = (userData: UserDto): string[] => {
    const requiredFields = ['name', 'email', 'birthDate', 'nDni', 'username', 'password'];
    return requiredFields.filter(field => !(field in userData));
};

const checkDataTypes = (userData: UserDto): boolean => {
    return (
        typeof userData.name === 'string' &&
        typeof userData.email === 'string' &&
        new Date(userData.birthDate).toString() !== 'Invalid Date' &&
        typeof userData.nDni === 'number' &&
        typeof userData.username === 'string' &&
        typeof userData.password === 'string'
    );
};

export const checkUserRegisterDto = (req: Request, res: Response, next: NextFunction) => {
    const userData: UserDto = req.body;
    
    const missingFields = checkRequiredFields(userData);
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `The following fields are missing: ${missingFields.join(', ')}` });
    }

    if (!checkDataTypes(userData)) {
        return res.status(400).json({ error: 'The provided data types are not valid' });
    }

    next();
};
