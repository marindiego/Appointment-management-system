import { ICredential } from "./ICredentials";

export interface IUser {
    id: number;
    name: string;
    email: string;
    birthDate: Date;
    nDni: number;
    credentialsId: ICredential["id"];
}