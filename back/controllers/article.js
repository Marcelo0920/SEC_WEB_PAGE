import { Articulo } from "../models/Articulo.js";
import { Category } from "../models/Category.js";
import { User } from "../models/User.js";

//@desc POST article
//@access User ADM

export const postArticle = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const { titulo, contenido, temas, fotos } = req.body;

    const categoria = Category.findById(temas);

    console.log(categoria);

    if (categoria) {
      const newArticle = await new Articulo({
        titulo,
        contenido,
        temas,
        fotos,
        autor_name: user.nombre,
        autor_id: user.id,
      }).save();

      res.status(202).json({
        mensaje: "Articulo publicado con exito",
        newArticle,
      });
    } else {
      res.status(500).json({ mensaje: "Hubo algun error" });
    }
  } catch (error) {
    next(error);
  }
};

//@desc GET articles
//@access EVERYONE

export const getAllArticles = async (req, res, next) => {
  try {
    const articles = await Articulo.find().sort({ fecha: -1 });

    res.send(articles);
  } catch (error) {
    next(error);
  }
};

//@desc GET article by ID
//@access EVERYONE

export const getArticle = async (req, res, next) => {
  try {
    const article = await Articulo.findById(req.params.id);

    if (!article) {
      return res
        .status(404)
        .json({ msg: "El articulo que intentas acceder no existe :(" });
    }

    const temas = await Category.find({ _id: { $in: article.temas } });

    const temaNombres = temas.map((tema) => tema.category);

    const articleWithTemas = {
      ...article.toJSON(),
      temas: temaNombres,
    };

    res.send(articleWithTemas);
  } catch (error) {
    next(error);
  }
};

//@desc UPDATE article
//@access article OWNER

export const updateArticle = async (req, res, next) => {
  try {
    const article = await Articulo.findById(req.params.id);

    if (!article) {
      return res
        .status(404)
        .json({ msg: "El articulo que intentas acceder no existe :(" });
    }

    if (titulo) article.titulo = titulo;
    if (contenido) article.contenido = contenido;
    if (temas) article.temas = temas;
    if (fotos) article.fotos = fotos;

    await article.save();

    res.status(200).json({
      success: true,
      message: "Articulo actualizado con exito",
    });
  } catch (error) {
    next(error);
  }
};

//@desc DELETE article
//@access article OWNER

export const deleteArticle = async (req, res, next) => {
  try {
    const article = await Articulo.findById(req.params.id);

    if (!article) {
      return res
        .status(404)
        .json({ msg: "El articulo que intentas acceder no existe :(" });
    }

    await article.remove();

    res.status(200).json({
      success: true,
      message: "Articulo removido con exito",
    });
  } catch (error) {
    next(error);
  }
};
