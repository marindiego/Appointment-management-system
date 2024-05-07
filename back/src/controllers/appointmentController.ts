import { Request, Response } from "express";
import { createAppointmentService, cancelAppointmentService, getAppointmentsService, getAppointmentByIdService } from "../services/appointmentService";
import { AppointmentDto } from "../dtos/AppointmentDTO";

// Controlador para obtener el arreglo completo de citas
export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las citas' });
    }
}

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await getAppointmentByIdService(Number(id));
        if (!appointment) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la cita' });
    }
}

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointment = req.body as AppointmentDto;
        const newAppointment = await createAppointmentService(appointment);
        if (newAppointment) {
            res.status(201).json({ message: "Cita creada", newAppointment });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la cita' });
    }
}
export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const canceledAppointment = await cancelAppointmentService(Number(id));
        if (!canceledAppointment) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        res.status(200).json({ message: 'Cita cancelada', canceledAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Error al cancelar la cita' });
    }
}
