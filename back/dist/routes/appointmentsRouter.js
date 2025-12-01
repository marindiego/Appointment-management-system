"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const checkAppointmentScheduleDto_1 = require("../middlewares/checkAppointmentScheduleDto");
const router = (0, express_1.Router)();
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
router.get("/", appointmentController_1.getAppointments);
// GET /appointments/:id => Obtener el detalle de un turno específico.
router.get("/:id", appointmentController_1.getAppointmentById);
// GET/appointments/user/:id => Obtener el listado de turnos de un usuario.
router.get("/users/:id", appointmentController_1.getAppointmentsByUserId);
// POST /appointments/schedule => Agenda un nuevo turno
router.post("/schedule", checkAppointmentScheduleDto_1.checkAppointmentScheduleDto, appointmentController_1.createAppointment);
// PUT /appointments/cancel => Cambiar el estatus de un turno a "cancelled"
router.put("/cancel/:id", appointmentController_1.cancelAppointment);
exports.default = router;
