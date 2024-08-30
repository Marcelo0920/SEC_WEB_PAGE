import express from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { postCategoria } from "../middlewares/validator.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, postCategory, postCategoria);

router.get("/", getCategories);

export default router;
