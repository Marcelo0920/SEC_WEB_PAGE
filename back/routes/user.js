import express from "express";
import {
  loadUser,
  logOutUser,
  loginUser,
  postUser,
} from "../controllers/user.js";

import { loginUsuario, postUsuario } from "../middlewares/validator.js";

const router = express.Router();

router.post("/registrar", postUser, postUsuario);

router.post("/login", loginUser, loginUsuario);

router.get("/cerrarsesion", logOutUser);

router.get("/loaduser", loadUser);

export default router;
