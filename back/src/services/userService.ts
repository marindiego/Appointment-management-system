import { UserDto } from "../dtos/UserDTO";
import { IUser } from "../interfaces/IUser";
import { createCredentials, validarCredenciales } from "./credentialsService";

let users: IUser[] = [
    {
        id: 1,
        name: "John Doe",
        email: "johnDoe@gmail.com",
        birthDate: new Date("1995-01-02"),
        nDni: 96021092,
        credentialsId: 1,
    }
]
let idCounter: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}
export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    try {
        const user = users.find(user => user.id === id);
        return user;
    } catch (error: any) {
        throw new Error(error);
    }
}
export const createUserService = async (user: UserDto): Promise<IUser>  => {
    try {
        const credentialsId = await createCredentials(user.username,user.password);
        idCounter++;
        const newUser: IUser = {
            id: idCounter,
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            nDni: user.nDni,
            credentialsId: credentialsId,
        };
        users.push(newUser);
        return newUser;
    } catch (error: any) {
        throw new Error(error);
    }
}
export const loginUserService = async (user: UserDto) => {
    try {
        const credencial = await validarCredenciales(user.username, user.password);
        return credencial;
    } catch (error: any) {
        throw new Error(error);
    }
}