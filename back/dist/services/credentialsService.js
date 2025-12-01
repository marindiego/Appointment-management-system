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
exports.validarCredenciales = exports.createCredentials = void 0;
const CredentialRepository_1 = require("../repositories/CredentialRepository");
const createCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = yield CredentialRepository_1.CredentialRepository.save({ username, password });
        return credentials.id;
    }
    catch (error) {
        throw new Error("Error creating credentials, invalid username o password");
    }
});
exports.createCredentials = createCredentials;
const validarCredenciales = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credencial = yield CredentialRepository_1.CredentialRepository.findOneBy({ username, password });
        if (!credencial)
            throw Error();
        return credencial.id;
    }
    catch (error) {
        throw new Error("Invalid user name or password");
    }
});
exports.validarCredenciales = validarCredenciales;
