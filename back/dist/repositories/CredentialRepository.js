"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialRepository = void 0;
const data_source_1 = require("../config/data-source");
exports.CredentialRepository = data_source_1.AppDataSource.getRepository('Credential');
