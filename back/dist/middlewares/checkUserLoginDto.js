"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserLoginDto = void 0;
const checkUserLoginDto = (req, res, next) => {
    const userData = req.body;
    if (!userData || typeof userData.username !== 'string' || typeof userData.password !== 'string') {
        return res.status(400).json({ error: 'Both username and password must be provided as strings' });
    }
    next();
};
exports.checkUserLoginDto = checkUserLoginDto;
