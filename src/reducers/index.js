import { combineReducers } from "@reduxjs/toolkit";
import articulo from "./articulo";
import categories from "./categories";
import auth from "./auth";
import mail from "./mail";
import comunicado from "./comunicado";

export default combineReducers({
  articulo,
  auth,
  mail,
  categories,
  comunicado,
});
