import { AppointmentModel } from "../config/data-source";
import { AppointmentDto } from "../dtos/AppointmentDTO";
import { Appointment } from "../entities/Appointment";
import { Status } from "../interfaces/IAppointment";
import { getUserByIdService } from "./userService";



export const getAppointmentsService = async (): Promise<Appointment[]> => {
    return AppointmentModel.find({
        relations: {
            user: true,
        }
    })
}
export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    try {
        return AppointmentModel.findOneBy({id});
    }catch(error){
        throw new Error("Appointment not found");
    }
}
export const createAppointmentService = async (appointment: AppointmentDto): Promise<Appointment> => {
    try {
        const user = await getUserByIdService(appointment.userId);
        if (user) {
            const newAppointment = await AppointmentModel.create(appointment);
            newAppointment.user = user;
            await AppointmentModel.save(newAppointment);
            return newAppointment;
        }
        throw new Error("User not found");
    }catch(error){
        throw new Error("Appointment not created");
    }
}
export const cancelAppointmentService = async (id: number): Promise<Appointment | null> => {
    try {
        const appointment = await getAppointmentByIdService(id);
        if(appointment){
            appointment.status = Status.CANCELED;
            await AppointmentModel.save(appointment);
            return appointment;
        }
        return null;
    }catch(error){
        throw new Error("Appointment not cancelled");
    }
}