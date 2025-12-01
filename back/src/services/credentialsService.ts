import { CredentialRepository } from "../repositories/CredentialRepository";



export const createCredentials = async (username: string, password: string): Promise<number> => {
   try {
    const credentials = await CredentialRepository.save({username, password});
    return credentials.id;
    }catch (error: any) {
        throw new Error("Error creating credentials, invalid username o password");
    }
};

export const validarCredenciales = async (username: string, password: string): Promise<number> => {
    try {
        const credencial = await CredentialRepository.findOneBy({username, password});
        if (!credencial) throw Error();
        return credencial.id;
    } catch (error: any) {
        throw new Error("Invalid user name or password");
    }
};