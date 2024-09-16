"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.createUserService = exports.getUserByCredentialsId = exports.getUserByIdService = exports.getUsersService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const credentialsService_1 = require("./credentialsService");
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserRepository_1.UserRepository.find({
        relations: {
            credential: true,
            appointments: true
        }
    });
});
exports.getUsersService = getUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserRepository_1.UserRepository.findOne({
            where: { id },
            relations: {
                credential: true,
                appointments: true
            }
        });
        if (!user)
            throw new Error("User not found");
        return user;
    }
    catch (error) {
        throw new Error("User not found");
    }
});
exports.getUserByIdService = getUserByIdService;
const getUserByCredentialsId = (credentialsId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepository_1.UserRepository.findOne({
        where: { credential: { id: credentialsId } }
    });
    if (!user)
        throw new Error("User not found");
    return user;
});
exports.getUserByCredentialsId = getUserByCredentialsId;
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = yield (0, credentialsService_1.createCredentials)(user.username, user.password);
        const newUser = yield UserRepository_1.UserRepository.save({
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            nDni: user.nDni,
            credential: credentials
        });
        return newUser;
    }
    catch (error) {
        throw Error(error.message);
    }
});
exports.createUserService = createUserService;
const loginUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = yield (0, credentialsService_1.validarCredenciales)(user.username, user.password);
        return credentials;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.loginUserService = loginUserService;
