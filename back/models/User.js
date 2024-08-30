import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  telefono: {
    type: String,
  },
  correo: {
    type: String,
  },
  cargo: {
    type: String,
  },
  password: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

export const User = mongoose.model("User", schema);
