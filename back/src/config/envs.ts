import dotenv from "dotenv";
//? What am I doing here?
//* I'm reading the .env file and setting the variables to the process.env object
dotenv.config({ path: "./src/config/.env"});


const PORT = process.env.PORT || 3000;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USERNAME = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME || "centro_de_salud";

const PGUSER = process.env.PGUSER
const PGHOST = process.env.PGHOST
const PGDATABASE = process.env.PGDATABASE
const PGPASSWORD = process.env.PGPASSWORD
const PGPORT = Number(process.env.PGPORT) || 5432;

export { PORT, PROTO, HOST, DB_PORT, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT };
