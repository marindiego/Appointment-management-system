import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credentials";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "dontforgetme",
  database: "centro_de_salud",
  synchronize: true,
  //dropSchema: true,
  logging: false,
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: []
});

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppointmentModel = AppDataSource.getRepository(Appointment);