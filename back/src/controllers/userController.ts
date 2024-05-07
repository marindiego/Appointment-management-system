import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService, loginUserService } from "../services/userService";
import { IUser } from "../interfaces/IUser";
import { UserDto } from "../dtos/UserDTO";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user = await getUserByIdService(Number(id));
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const user: UserDto = req.body;
        console.log(user);
        const newUser = await createUserService(user);
        res.status(201).json({message: "User registered",newUser})
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}
export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const credentials = await loginUserService(user);
        if (!credentials) {
            return res.status(400).json({ message: "Register before log-in"})
        }
        res.status(200).json({message: "User logged",credentials});
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}

