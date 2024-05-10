import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials";
import { Appointment } from "./Appointment";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 50
    })
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        type: "date",
        default: new Date(),
    })
    birthDate: Date;

    @Column({
        type: "int",
        unique: true,
    })
    nDni: number;

    @OneToOne(()=> Credential)
    @JoinColumn()
    credential: Credential | Credential["id"];

    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}