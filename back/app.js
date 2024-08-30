import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import article from "./routes/article.js";
import category from "./routes/category.js";
import user from "./routes/user.js";
import mailer from "./routes/mailer.js";
import comunicado from "./routes/comunicado.js";

config({
  path: "./data/config.env",
});

export const app = express();

//using Middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/articulos", article);
app.use("/categorias", category);
app.use("/usuarios", user);
app.use("/mailer", mailer);
app.use("/comunicados", comunicado);
