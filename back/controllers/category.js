import { Category } from "../models/Category.js";

//@desc POST category
//@access User ADM

export const postCategory = async (req, res, next) => {
  try {
    const { category } = req.body;

    const newCategory = await new Category({
      category,
    }).save();

    res.status(202).json({
      mensaje: "Categoria creada con exito",
      newCategory,
    });
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    return res
      .status(200)
      .json({ mensaje: "Categorias encontradas", categories });
  } catch (error) {
    next(error);
  }
};
