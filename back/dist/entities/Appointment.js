"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = exports.Status = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
//? What does enum mean?
//* Enum is a special type in TypeScript that allows you to define a set of named constants.
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["CANCELED"] = "CANCELED";
})(Status || (exports.Status = Status = {}));
let Appointment = class Appointment {
};
exports.Appointment = Appointment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointment.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar"
    }),
    __metadata("design:type", String)
], Appointment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum", // Here we are using enum type to define the possible values for the status column. 
        enum: Status, // Here we are using the Status enum to define the possible values for the status column.  
        default: Status.ACTIVE
    }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.appointments),
    __metadata("design:type", User_1.User)
], Appointment.prototype, "user", void 0);
exports.Appointment = Appointment = __decorate([
    (0, typeorm_1.Entity)({
        name: "appointments"
    })
], Appointment);
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
