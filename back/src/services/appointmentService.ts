import { AppointmentDto } from "../dtos/AppointmentDTO";
import { IAppointment, Status } from "../interfaces/IAppointment";

const appointments: IAppointment[] = [
    {
        id: 1,
        date: new Date("2024-02-02"),
        time: "10:00am",
        description: "Orthodontics",
        status: Status.ACTIVE,
        userId: 1,
    }
];
let idCounter: number = 0;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
}
export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    try {
        return appointments.find(appointment => appointment.id === id);
    }catch(error){
        throw new Error("Appointment not found");
    }
}
export const createAppointmentService = async (appointment: AppointmentDto): Promise<IAppointment> => {
    try {
        idCounter++;
        const newAppointment: IAppointment = {
            id: idCounter,
            date: appointment.date,
            time: appointment.time,
            description: appointment.description,
            status: Status.ACTIVE,
            userId: appointment.userId,
        }
        appointments.push(newAppointment);
        return newAppointment;
    }catch(error){
        throw new Error("Appointment not created");
    }
}
export const cancelAppointmentService = async (id: number): Promise<IAppointment | undefined> => {
    try {
        const appointment = await getAppointmentByIdService(id);
        if(appointment){
            appointment.status = Status.CANCELED;
            return appointment;
        }
        return undefined;
    }catch(error){
        throw new Error("Appointment not cancelled");
    }
}