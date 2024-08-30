import mongoose from "mongoose";

const schema = new mongoose.Schema({
  titulo: {
    type: String,
  },
  contenido: {
    type: String,
  },

  autor_name: {
    type: String,
  },

  autor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  foto: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

export const Comunicado = mongoose.model("Comunicado", schema);
