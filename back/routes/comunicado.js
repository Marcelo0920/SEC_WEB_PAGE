import express from "express";
import {
  deleteComunicado,
  getAllComunicados,
  getComunicado,
  postComunicado,
  updateComunicado,
} from "../controllers/comunicado.js";

import { validateComunicado } from "../middlewares/validator.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, postComunicado, validateComunicado);

router.get("/", getAllComunicados);

router.get("/:id", getComunicado);

router.put("/:id", isAuthenticated, updateComunicado);

router.delete("/:id", isAuthenticated, deleteComunicado);

export default router;
