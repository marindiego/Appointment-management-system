import { UserModel } from "../config/data-source";
import { UserDto } from "../dtos/UserDTO";
import { User } from "../entities/User";
import { createCredentials, validarCredenciales } from "./credentialsService";


export const getUsersService = async (): Promise<User[]> => {
    return await UserModel.find();
}
export const getUserByIdService = async (id: number): Promise<User | null> => {
    try {
        const user = await UserModel.findOneBy({id});
        return user;
    } catch (error: any) {
        throw new Error("User not found");
    }
}
export const createUserService = async (user: UserDto): Promise<User>  => {
    try {
        const credentials = await createCredentials(user.username, user.password);
        const newUser = await UserModel.create(user);
        newUser.credential = credentials;
        await UserModel.save(newUser);
        return newUser;
    } catch (error: any) {
        throw new Error("User not created");
    }
}
export const loginUserService = async (user: UserDto) => {
    try {
        const credentials = await validarCredenciales(user.username, user.password);
        return credentials;
    } catch (error: any) {
        throw new Error("User not found");
    }
}