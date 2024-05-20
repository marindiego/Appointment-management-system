import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

//? What does enum mean?
//* Enum is a special type in TypeScript that allows you to define a set of named constants.
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

    @Column({
        type: "varchar"
    })
    description: string

    @Column({
        type: "enum", // Here we are using enum type to define the possible values for the status column. 
        enum: Status, // Here we are using the Status enum to define the possible values for the status column.  
        default: Status.ACTIVE 
    })
    status: Status
    
    @ManyToOne(()=> User, (user) => user.appointments)
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
