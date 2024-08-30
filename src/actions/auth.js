import axios from "axios";
import {
  USER_LOADED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  AUTH_ERROR,
  LOGIN_START,
  DEFAULT_SESSION,
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import Cookies from "js-cookie";

//LOAD USER
export const loadUser = () => async (dispatch) => {
  const token = Cookies.get("sec");

  const config = {
    headers: {
      "Content-Type": "application/json",
      sec: Cookies.get("sec"),
    },
  };

  if (token) {
    setAuthToken(token);

    try {
      console.log("trying this");
      const res = await axios.get(
        "http://localhost:5000/usuarios/loaduser",
        config
      );

      console.log(res.data);

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  }
};

//LOGIN
export const login = (correo, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ correo, password });

  dispatch({
    type: LOGIN_START,
  });

  try {
    const res = await axios.post(
      "http://localhost:5000/usuarios/login",
      body,
      config
    );

    console.log(res.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const setDefaultSession = () => (dispatch) => {
  dispatch({ type: DEFAULT_SESSION });
};

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  window.location.reload();
};
