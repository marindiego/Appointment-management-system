
import { UserDto } from "../dtos/UserDTO";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { createCredentials, validarCredenciales } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {
    return await UserRepository.find({
        relations: {
            credential: true,
            appointments: true
        }
    });
}
export const getUserByIdService = async (id: number): Promise<User> => {
    try {
        const user = await UserRepository.findOne({
            where: { id },
            relations: {
                credential: true,
                appointments: true
            }
        })
        if (!user) throw new Error("User not found");
        return user;
    } catch (error: any) {
        throw new Error("User not found");
    }
}
export const getUserByCredentialsId = async (credentialsId: number): Promise<User>=> {
    const user = await UserRepository.findOne({
        where: { credential: { id: credentialsId } }
    })
    if (!user) throw new Error("User not found");
    return user;
}
export const createUserService = async (user: UserDto): Promise<User>  => {
    try {
        const credentials = await createCredentials(user.username, user.password);
        const newUser = await UserRepository.save({
            name: user.name,
            email: user.email,
            birthDate: user.birthDate,
            nDni: user.nDni,
            credential: credentials
        })
        return newUser;
    } catch (error: any) {
        throw Error(error.message);
    }
}
export const loginUserService = async (user: UserDto) => {
    try {
        const credentials = await validarCredenciales(user.username, user.password);
        return credentials;
    } catch (error: any) {
        throw new Error(error.message);
    }
}