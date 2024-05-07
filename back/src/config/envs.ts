import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env"});


const PORT = process.env.PORT || 3000;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";

export { PORT, PROTO, HOST };
