import { Router } from "express";
import { getUsers, getUserById, createUser, loginUser } from "../controllers/userController";

const router: Router = Router();

// GET /users => Obtener todos los usuarios
router.get("/", getUsers);

// GET /users/:id => Obtener un usuario por su ID
router.get("/:id", getUserById);

// POST /users/register => Crear un nuevo usuario
router.post("/register", createUser);

// POST /users/login = Login de un usuario
router.post("/login", loginUser);

export default router;
