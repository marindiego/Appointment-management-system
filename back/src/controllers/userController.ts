import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
    res.send('Obtener todos los usuarios');
}

export const getUserById = async (req: Request, res: Response) => {
    res.send('Obtener un usuario por id');
}
export const createUser = async (req: Request, res: Response) => {
    res.send('Crear un nuevo usuario');
}