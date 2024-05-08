import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials";
import { Appointment } from "./Appointment";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50
    })
    name: string

    @Column()
    email: string

    @Column()
    birthDate: Date

    @Column("integer")
    nDni: number

    @OneToOne(()=> Credential)
    @JoinColumn()
    credential: Credential["id"]

    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    appointment: Appointment
}