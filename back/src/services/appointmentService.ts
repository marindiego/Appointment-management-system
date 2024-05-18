
import { AppDataSource } from "../config/data-source";
import { AppointmentDto } from "../dtos/AppointmentDTO";
import { Appointment } from "../entities/Appointment";
import { Status } from "../interfaces/IAppointment";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { getUserByIdService } from "./userService";



export const getAppointmentsService = async (): Promise<Appointment[]> => {
    return await AppointmentRepository.find({
        relations: {
            user: true,
        }
    })
}
export const getAppointmentsByUserIdService = async (userId: number): Promise<Appointment[]> => {
    try {
        const appointments = await AppointmentRepository.find({
            where: { user: { id: userId } },
        })
        if (!appointments.length) {
            throw new Error("Appointments not found");
        }
        return appointments;
    } catch (error) {
        throw new Error("Appointments not found");
    }
}
export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    try {
        return AppointmentRepository.findOne({
            where: { id },
            relations: {
                user: true,
            }
        })
    }catch(error){
        throw new Error("Appointment not found");
    }
}
export const createAppointmentService = async (appointment: AppointmentDto): Promise<Appointment> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    
    try {
        queryRunner.startTransaction();
        const user = await getUserByIdService(appointment.userId);
        const newAppointment = await AppointmentRepository.save({
            date: appointment.date,
            time: appointment.time,
            description: appointment.description,
            user
        });
        await queryRunner.commitTransaction();
        return newAppointment;
        /*const user = await getUserByIdService(appointment.userId);
        if (user) {
            const newAppointment = await AppointmentRepository.save({
                date: appointment.date,
                time: appointment.time,
                description: appointment.description,
                user
            })
            return newAppointment;
        }
        throw new Error("User not found");*/
    }catch(error){
        await queryRunner.rollbackTransaction();
        throw new Error("Appointment not created");
    }finally{
        await queryRunner.release();
    }
}
export const cancelAppointmentService = async (id: number): Promise<Appointment> => {
    try {
        const appointment = await getAppointmentByIdService(id);
        if(appointment){
            await AppointmentRepository.save({
                ...appointment,
                status: Status.CANCELED
            });
            return appointment;
        }
        throw new Error("Appointment not found");
    }catch(error){
        throw new Error("Appointment not cancelled");
    }
}