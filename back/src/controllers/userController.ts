import { Request, Response } from "express";
import { createUserService, getUserByCredentialsId, getUserByIdService, getUsersService, loginUserService } from "../services/userService";
import { UserDto } from "../dtos/UserDTO";
import { log } from "console";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService()
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await getUserByIdService(Number(id));
        if (!user) {
            return res.status(404).json({ message: 'Usuario not found' });
        }
        res.status(200).json(user);
    } catch (error: any ) {
        res.status(500).json({message: error.message});
    }
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const user: UserDto = req.body;
        const newUser = await createUserService(user);
        res.status(201).json({message: "User registered",newUser})
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}
export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const credentialsId = await loginUserService(user);
        const userLogged = await getUserByCredentialsId(credentialsId);
        res.status(200).json({login: true,userLogged});
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

