import { Router } from "express";
import userRouter from "./usersRouter";
import turnsRouter from "./appointmentsRouter";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/appointments", turnsRouter);

export default router; 