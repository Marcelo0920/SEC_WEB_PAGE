import { User } from "../models/User.js";
import ErrorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  //const { token } = req.cookies;

  const token = req.headers["sec"];
  if (!token) {
    return next(new ErrorHandler("No Autenticado", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.user.id);
  next();
};
