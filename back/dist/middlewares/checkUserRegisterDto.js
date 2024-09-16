"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserRegisterDto = void 0;
const checkRequiredFields = (userData) => {
    const requiredFields = ['name', 'email', 'birthDate', 'nDni', 'username', 'password'];
    return requiredFields.filter(field => !(field in userData));
};
const checkDataTypes = (userData) => {
    return (typeof userData.name === 'string' &&
        typeof userData.email === 'string' &&
        new Date(userData.birthDate).toString() !== 'Invalid Date' &&
        typeof userData.nDni === 'number' &&
        typeof userData.username === 'string' &&
        typeof userData.password === 'string');
};
const checkUserRegisterDto = (req, res, next) => {
    const userData = req.body;
    const missingFields = checkRequiredFields(userData);
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `The following fields are missing: ${missingFields.join(', ')}` });
    }
    if (!checkDataTypes(userData)) {
        return res.status(400).json({ error: 'The provided data types are not valid' });
    }
    next();
};
exports.checkUserRegisterDto = checkUserRegisterDto;
