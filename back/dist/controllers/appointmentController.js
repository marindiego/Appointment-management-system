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
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentsByUserId = exports.getAppointmentById = exports.getAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
// Controlador para obtener el arreglo completo de citas
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_1.getAppointmentsService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentService_1.getAppointmentByIdService)(Number(id));
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointmentById = getAppointmentById;
const getAppointmentsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointments = yield (0, appointmentService_1.getAppointmentsByUserIdService)(Number(id));
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointmentsByUserId = getAppointmentsByUserId;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = req.body;
        const newAppointment = yield (0, appointmentService_1.createAppointmentService)(appointment);
        if (newAppointment) {
            res.status(201).json({ message: "Appointment Created", newAppointment });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createAppointment = createAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const canceledAppointment = yield (0, appointmentService_1.cancelAppointmentService)(Number(id));
        if (!canceledAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment cancelled', canceledAppointment });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.cancelAppointment = cancelAppointment;
