import {
  comparePassword,
  decodeToken,
  encryptPasword,
} from "../middlewares/bcrypt.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/error.js";
import { sendToken, cookiesOptions } from "../utils/features.js";

//@desc POST User
//@access User ADM

export const postUser = async (req, res, next) => {
  try {
    const { nombre, telefono, correo, cargo, descripcion, password, admCode } =
      req.body;

    if (!admCode === process.env.ADM_CODE) {
      return res
        .status(403)
        .json({ msg: "Usted no tiene los permisos para crear un Usuario" });
    }

    let user = await User.findOne({ correo });

    if (user) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    const encryptedPassword = await encryptPasword(password);

    const newUser = await new User({
      nombre,
      telefono,
      correo,
      cargo,
      descripcion,
      password: encryptedPassword,
    }).save();

    res.status(202).json({ mensaje: "Usuario creado con exito", newUser });
  } catch (error) {
    next(error);
  }
};

//@desc LOGIN User
//@access User

export const loginUser = async (req, res, next) => {
  try {
    const { correo, password } = req.body;

    let user = await User.findOne({ correo });

    if (!user) {
      return res.status(400).json({
        error: { msg: "El correo o la contrasenia son incorrectossss" },
      });
    }

    //verify if password is ok
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return next(
        new ErrorHandler("El email o la contrasenia son incorrectos", 400)
      );
    }

    //return jsonweb token
    const payload = {
      user: {
        id: user._id,
        nombre: user.nombre,
      },
    };

    sendToken(res, `Bienvenido ${user.nombre}`, 200, user, payload);
  } catch (error) {
    next(error);
  }
};

export const logOutUser = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      ...cookiesOptions,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      msg: "Sesion cerrada con exito",
    });
};

//LOAD USER
export const loadUser = async (req, res, next) => {
  try {
    console.log("deberia entrar aca");
    const token = req.headers["sec"];

    const decodedToken = await decodeToken(token);
    const user = await User.findById(decodedToken.user.id).select("-password");

    console.log(user);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
