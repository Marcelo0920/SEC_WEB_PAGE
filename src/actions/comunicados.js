import axios from "axios";
import Cookies from "js-cookie";

import {
  COMUNICADO_ERROR,
  GET_COMUNICADO,
  GET_COMUNICADOS,
  UPDATE_COMUNICADO,
  DELETE_COMUNICADO,
  POST_COMUNICADO,
} from "./types";

//GET COMUNICADOS
export const getComunicados = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/articulos");

    dispatch({
      type: GET_COMUNICADOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COMUNICADO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//GET COMUNICADO
export const getComunicado = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/articulos/${id}`);

    dispatch({
      type: GET_COMUNICADO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COMUNICADO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//POST COMUNICADO
export const addComunicado = (formData) => async (dispatch) => {
  try {
    dispatch({ type: COMUNICADO_ERROR });

    const config = {
      headers: {
        "Content-Type": "application/json",
        sec: Cookies.get("sec"),
      },
    };

    const res = await axios.post(
      "http://localhost:5000/articulos/",
      formData,
      config
    );

    dispatch({
      type: POST_COMUNICADO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COMUNICADO_ERROR,
      payload: {
        msg: error,
        status: error,
      },
    });
  }
};

//DELETE COMUNICADO
export const deleteComunicado = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        sec: Cookies.get("sec"),
      },
    };

    await axios.delete(`/articulos/${id}`, config);

    dispatch({
      type: DELETE_COMUNICADO,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: COMUNICADO_ERROR,
      payload: {
        msg: error,
        status: error,
      },
    });
  }
};
