import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum Status {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED"
}

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    description: string

    @Column()
    status: Status
    
    @ManyToOne(()=> User, (user) => user.appointment)
    user: User
}


/* 
export enum Status {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED"
}

export interface IAppointment {
    id: number;
    date: Date;
    time: string;
    description: string;
    status: Status;
    userId: IUser["id"];
} 
*/
