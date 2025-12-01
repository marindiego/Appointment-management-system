import { AppDataSource } from "../config/data-source";

export const CredentialRepository = AppDataSource.getRepository('Credential');