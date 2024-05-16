import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'credentials'
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar"
    })
    username: string;

    @Column({
        type: "varchar",  // Password is stored as a string
        select: false,    // Don't show password
    })
    password: string;
}

