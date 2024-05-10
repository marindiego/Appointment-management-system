import { Router } from "express";
import { getUsers, getUserById, createUser, loginUser } from "../controllers/userController";
import { checkUserRegisterDto } from "../middlewares/checkUserRegisterDto";
import { checkUserLoginDto } from "../middlewares/checkUserLoginDto";

const router: Router = Router();

// GET /users => Obtener todos los usuarios
router.get("/", getUsers);

// GET /users/:id => Obtener un usuario por su ID
router.get("/:id", getUserById);

// POST /users/register => Crear un nuevo usuario
router.post("/register", checkUserRegisterDto ,createUser);

// POST /users/login = Login de un usuario
router.post("/login", checkUserLoginDto,loginUser);

export default router;
