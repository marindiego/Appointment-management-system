import { IUser } from "../interfaces/IUser";

export interface AppointmentDto {
    date: Date;
    time: string;
    description: string;
    userId: IUser["id"];
}