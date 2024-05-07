import { ICredential } from "../interfaces/ICredentials"

let credentials: ICredential[] = [
    {
        id: 1,
        username: "john_cito",
        password: "1234"
    }
]

let idCounter: number = 2;

export const createCredentials = async (username: string, password: string): Promise<number> => {
   try {
    const credencial: ICredential = {
        id: idCounter++,
        username,
        password
    }
    credentials.push(credencial);
    return credencial.id;
    }catch (error: any) {
        throw new Error(error);
    }
   
};

export const validarCredenciales = async (username: string, password: string): Promise<number | null> => {
    try {
        const credencial = credentials.find(credencial => credencial.username === username && credencial.password === password);
        return credencial?.id || null;
    } catch (error: any) {
        throw new Error(error);
    }
};