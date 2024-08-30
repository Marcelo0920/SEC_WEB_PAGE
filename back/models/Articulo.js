import mongoose from "mongoose";

const schema = new mongoose.Schema({
  titulo: {
    type: String,
  },
  contenido: {
    type: String,
  },
  temas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  autor_name: {
    type: String,
  },

  autor_cargo: {
    type: String,
  },

  autor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  fotos: [
    {
      type: String,
    },
  ],
  fecha: {
    type: Date,
    default: Date.now,
  },
});

export const Articulo = mongoose.model("Articulo", schema);
