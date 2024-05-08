import { CredentialModel } from "../config/data-source";


export const createCredentials = async (username: string, password: string): Promise<number> => {
   try {
    const credentials = CredentialModel.create({username, password})
    await CredentialModel.save(credentials);
    return credentials.id;
    }catch (error: any) {
        throw new Error(error);
    }
   
};

export const validarCredenciales = async (username: string, password: string): Promise<number | null> => {
    try {
        const credencial = await CredentialModel.findOneBy({username, password});
        return credencial?.id || null;
    } catch (error: any) {
        throw new Error(error);
    }
};