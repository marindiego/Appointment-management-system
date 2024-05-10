import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env"});


const PORT = process.env.PORT || 3000;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USERNAME = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME || "centro_de_salud";


export { PORT, PROTO, HOST, DB_PORT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME };
