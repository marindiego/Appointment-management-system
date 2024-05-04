import { Request, Response } from "express";

export const getAppointments = async (req: Request, res: Response) => {
    res.send("Get all turns")
}
export const getAppointment = async (req: Request, res: Response) => {
    res.send("Get turn")
}
export const createAppointment = async (req: Request, res: Response) => {
    res.send("Create appointment")
}
export const cancelAppointment = async (req: Request, res: Response) => {
    res.send("Cancel turn")
}