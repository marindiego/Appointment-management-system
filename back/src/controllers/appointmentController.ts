import { Request, Response } from "express";
import { createAppointmentService, cancelAppointmentService, getAppointmentsService, getAppointmentByIdService, getAppointmentsByUserIdService } from "../services/appointmentService";
import { AppointmentDto } from "../dtos/AppointmentDTO";

// Controlador para obtener el arreglo completo de citas
export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(Number(id));
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}
export const getAppointmentsByUserId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointments = await getAppointmentsByUserIdService(Number(id));
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}
export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointment = req.body as AppointmentDto;
        const newAppointment = await createAppointmentService(appointment);
        if (newAppointment) {
            res.status(201).json({ message: "Appointment Created", newAppointment });
        }
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}
export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const canceledAppointment = await cancelAppointmentService(Number(id));
        if (!canceledAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment cancelled', canceledAppointment });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}
