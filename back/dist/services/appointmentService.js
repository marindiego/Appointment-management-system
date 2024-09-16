"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.createAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsByUserIdService = exports.getAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const IAppointment_1 = require("../interfaces/IAppointment");
const AppointmentRepository_1 = require("../repositories/AppointmentRepository");
const userService_1 = require("./userService");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield AppointmentRepository_1.AppointmentRepository.find({
        relations: {
            user: true,
        }
    });
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentsByUserIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield AppointmentRepository_1.AppointmentRepository.find({
            where: { user: { id: userId } },
        });
        if (!appointments.length) {
            throw new Error("Appointments not found");
        }
        return appointments;
    }
    catch (error) {
        throw new Error("The user does not exist or has no appointments");
    }
});
exports.getAppointmentsByUserIdService = getAppointmentsByUserIdService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return AppointmentRepository_1.AppointmentRepository.findOne({
            where: { id },
            relations: {
                user: true,
            }
        });
    }
    catch (error) {
        throw new Error("Appointment not found");
    }
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const createAppointmentService = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    try {
        queryRunner.startTransaction();
        const user = yield (0, userService_1.getUserByIdService)(appointment.userId);
        const newAppointment = yield AppointmentRepository_1.AppointmentRepository.save({
            date: appointment.date,
            time: appointment.time,
            description: appointment.description,
            user
        });
        yield queryRunner.commitTransaction();
        return newAppointment;
        /*const user = await getUserByIdService(appointment.userId);
        if (user) {
            const newAppointment = await AppointmentRepository.save({
                date: appointment.date,
                time: appointment.time,
                description: appointment.description,
                user
            })
            return newAppointment;
        }
        throw new Error("User not found");*/
    }
    catch (error) {
        yield queryRunner.rollbackTransaction();
        throw new Error("Appointment not created");
    }
    finally {
        yield queryRunner.release();
    }
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield (0, exports.getAppointmentByIdService)(id);
        if (appointment) {
            yield AppointmentRepository_1.AppointmentRepository.save(Object.assign(Object.assign({}, appointment), { status: IAppointment_1.Status.CANCELED }));
            return appointment;
        }
        throw new Error("Appointment not found");
    }
    catch (error) {
        throw new Error("Appointment not cancelled");
    }
});
exports.cancelAppointmentService = cancelAppointmentService;
