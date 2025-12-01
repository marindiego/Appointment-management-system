"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const checkUserRegisterDto_1 = require("../middlewares/checkUserRegisterDto");
const checkUserLoginDto_1 = require("../middlewares/checkUserLoginDto");
const router = (0, express_1.Router)();
// GET /users => Obtener todos los usuarios
router.get("/", userController_1.getUsers);
// GET /users/:id => Obtener un usuario por su ID
router.get("/:id", userController_1.getUserById);
// POST /users/register => Crear un nuevo usuario
router.post("/register", checkUserRegisterDto_1.checkUserRegisterDto, userController_1.createUser);
// POST /users/login = Login de un usuario
router.post("/login", checkUserLoginDto_1.checkUserLoginDto, userController_1.loginUser);
exports.default = router;
