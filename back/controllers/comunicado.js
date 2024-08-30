import { Comunicado } from "../models/Comunicado.js";
import { Category } from "../models/Category.js";
import { User } from "../models/User.js";

//@desc POST comunicado
//@access User ADM

export const postComunicado = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const { titulo, contenido, foto } = req.body;

    const newComunicado = await new Comunicado({
      titulo,
      contenido,
      foto,
      autor_name: user.nombre,
      autor_id: user.id,
    }).save();

    res.status(202).json({
      mensaje: "Comunicado publicado con exito",
      newComunicado,
    });
  } catch (error) {
    next(error);
  }
};

//@desc GET Comunicados
//@access EVERYONE

export const getAllComunicados = async (req, res, next) => {
  try {
    const comunicados = await Comunicado.find().sort({ date: -1 });

    res.send(comunicados);
  } catch (error) {
    next(error);
  }
};

//@desc GET comunicado by ID
//@access EVERYONE

export const getComunicado = async (req, res, next) => {
  try {
    const comunicado = await Comunicado.findById(req.params.id);

    if (!comunicado) {
      return res
        .status(404)
        .json({ msg: "El Comunicado que intentas acceder no existe :(" });
    }

    res.send(comunicado);
  } catch (error) {
    next(error);
  }
};

//@desc UPDATE comunicado
//@access comunicado OWNER

export const updateComunicado = async (req, res, next) => {
  try {
    const comunicado = await Comunicado.findById(req.params.id);

    if (!comunicado) {
      return res
        .status(404)
        .json({ msg: "El Comunicado que intentas acceder no existe :(" });
    }

    if (titulo) comunicado.titulo = titulo;
    if (contenido) comunicado.contenido = contenido;
    if (fotos) comunicado.fotos = fotos;

    await comunicado.save();

    res.status(200).json({
      success: true,
      message: "Comunicado actualizado con exito",
    });
  } catch (error) {
    next(error);
  }
};

//@desc DELETE comunicado
//@access comunicado OWNER

export const deleteComunicado = async (req, res, next) => {
  try {
    const comunicado = await Comunicado.findById(req.params.id);

    if (!comunicado) {
      return res
        .status(404)
        .json({ msg: "El Comunicado que intentas acceder no existe :(" });
    }

    await comunicado.remove();

    res.status(200).json({
      success: true,
      message: "Comunicado removido con exito",
    });
  } catch (error) {
    next(error);
  }
};
