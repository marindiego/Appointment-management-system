"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = exports.DB_PORT = exports.HOST = exports.PROTO = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
//? What am I doing here?
//* I'm reading the .env file and setting the variables to the process.env object
dotenv_1.default.config({ path: "./src/config/.env" });
const PORT = process.env.PORT || 3000;
exports.PORT = PORT;
const PROTO = process.env.PROTO || "http";
exports.PROTO = PROTO;
const HOST = process.env.HOST || "localhost";
exports.HOST = HOST;
const DB_PORT = Number(process.env.DB_PORT) || 5432;
exports.DB_PORT = DB_PORT;
const DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_HOST = DB_HOST;
const DB_USERNAME = process.env.DB_USER || "postgres";
exports.DB_USERNAME = DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_PASSWORD = DB_PASSWORD;
const DB_NAME = process.env.DB_NAME || "centro_de_salud";
exports.DB_NAME = DB_NAME;
