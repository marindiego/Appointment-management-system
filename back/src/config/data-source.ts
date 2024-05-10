import { DataSource } from "typeorm";
import { DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME, HOST } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  //dropSchema: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: []
});

