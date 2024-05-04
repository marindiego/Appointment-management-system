import { Router } from "express";
import { getAppointment, getAppointments, createAppointment, cancelAppointment } from "../controllers/turnsController";

const router: Router = Router();

// GET /appointment => Obtener el listado de todos los turnos de todos los usuarios.
router.get("/", getAppointments);

// GET /appointment/:id => Obtener el detalle de un turno específico.
router.get("/:id", getAppointment);

// POST /appointment/schedule => Agenda un nuevo turno
router.post("/schedule", createAppointment);

// PUT /appointment/cancel => Cambiar el estatus de un turno a "cancelled"
router.put("/cancel", cancelAppointment);

export default router;
