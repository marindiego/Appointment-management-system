import { Router } from "express";
import { getAppointmentById, getAppointments, createAppointment, cancelAppointment, getAppointmentsByUserId } from "../controllers/appointmentController";
import { checkAppointmentScheduleDto } from "../middlewares/checkAppointmentScheduleDto";


const router: Router = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
router.get("/", getAppointments);

// GET /appointments/:id => Obtener el detalle de un turno específico.
router.get("/:id", getAppointmentById);

// GET/appointments/user/:id => Obtener el listado de turnos de un usuario.
router.get("/users/:id", getAppointmentsByUserId);

// POST /appointments/schedule => Agenda un nuevo turno
router.post("/schedule", checkAppointmentScheduleDto ,createAppointment);

// PUT /appointments/cancel => Cambiar el estatus de un turno a "cancelled"
router.put("/cancel/:id", cancelAppointment);

export default router;
