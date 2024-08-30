import axios from "axios";
import Cookies from "js-cookie";

import {
  ARTICULO_ERROR,
  ARTICULO_START,
  DELETE_ARTICULO,
  GET_ARTICULO,
  GET_ARTICULOS,
  POST_ARTICULO,
  UPDATE_ARTICULO,
  DEFAULT_ARTICLE,
} from "./types";

//SET DEFAULT ARTICLE VALUES

export const setDefaultArticle = () => async (dispatch) => {
  try {
    dispatch({
      type: DEFAULT_ARTICLE,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//GET ARTICULOS
export const getArticulos = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/articulos");

    dispatch({
      type: GET_ARTICULOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//GET ARTICULO
export const getArticulo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/articulos/${id}`);

    dispatch({
      type: GET_ARTICULO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//UPDATE ARTICULO
export const updateArticulo = (formData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        sec: Cookies.get("sec"),
      },
    };

    const res = await axios.put(`articulos/${id}`, formData, config);

    dispatch({
      type: UPDATE_ARTICULO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const startArticulo = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICULO_START });
  } catch (error) {
    console.log(error);
  }
};

//POST ARTICULO
export const addArticulo = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        sec: Cookies.get("sec"),
      },
    };
    console.log(formData);
    const res = await axios.post(
      "http://localhost:5000/articulos/",
      formData,
      config
    );

    dispatch({
      type: POST_ARTICULO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      payload: {
        msg: error,
        status: error,
      },
    });
  }
};

//DELETE ARTICULO
export const deleteAticulo = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        sec: Cookies.get("sec"),
      },
    };
    await axios.delete(`/articulos/${id}`, config);

    dispatch({
      type: DELETE_ARTICULO,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
