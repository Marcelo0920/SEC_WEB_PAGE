import { check } from "express-validator";

export const postUsuario = [
  check("nombre", "El nombre es requerido").not().isEmpty(),
  check("telefono", "El numero de telefono es requerido").notEmpty().isInt(),
  check("correo", "El correo electronico es requerido").notEmpty().isEmail(),
  check("cargo", "El cargo es requerido").not().isEmpty(),
  check("descripcion", "La descripcion es requerida").not().isEmpty(),
  check("password", "La contrasenia debe ser de 6 o mas caracteres").isLength({
    min: 6,
  }),
];

export const loginUsuario = [
  check("correo", "El correo es requerido").notEmpty().isEmail(),
  check("password", "La contrasenia debe ser de 6 o mas caracteres").isLength({
    min: 6,
  }),
];

export const postCategoria = [
  check("category", "La categoria es requerida").not().isEmpty,
];

export const postArticulo = [
  check("titulo", "El titulo es requerido").not().isEmpty(),
  check("contenido", "El contenido es requerido").not().isEmpty(),
  check("temas", "Los temas son requeridos").not().isEmpty(),
  check("fotos", "Las fotos son requeridas").not().isEmpty(),
];

export const validateComunicado = [
  check("titulo", "El titulo es requerido").not().isEmpty(),
  check("contenido", "El contenido es requerido").not().isEmpty(),
  check("foto", "La foto son requeridas").not().isEmpty(),
];
