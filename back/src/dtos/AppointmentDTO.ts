import { User } from "../entities/User";


export interface AppointmentDto {
    date: Date;
    time: string;
    description: string;
    userId: User["id"];
}