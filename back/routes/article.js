import express from "express";
import {
  deleteArticle,
  getAllArticles,
  getArticle,
  postArticle,
  updateArticle,
} from "../controllers/article.js";
import { postArticulo } from "../middlewares/validator.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", isAuthenticated, postArticle, postArticulo);

router.get("/", getAllArticles);

router.get("/:id", getArticle);

router.put("/:id", isAuthenticated, updateArticle);

router.delete("/:id", isAuthenticated, deleteArticle);

export default router;
