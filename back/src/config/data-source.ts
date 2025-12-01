import { DataSource } from "typeorm";
import { PGUSER,PGHOST,PGPASSWORD,PGDATABASE,PGPORT } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: PGHOST,
  port: PGPORT,
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  synchronize: true,
  //dropSchema: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: []
});

