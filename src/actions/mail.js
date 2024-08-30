import {
  SEND_MAIL,
  ARTICULO_ERROR,
  EMAIL_START,
  SET_DEFAULT_EMAIL,
} from "./types";
import axios from "axios";

export const startMailSending = () => (dispatch) => {
  dispatch({ type: EMAIL_START });
};

export const setDefaultMailStatus = () => (dispatch) => {
  dispatch({ type: SET_DEFAULT_EMAIL });
};

export const sendMail = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("http://localhost:5000/mailer", body, config);

    console.log(res);

    dispatch({
      type: SEND_MAIL,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICULO_ERROR,
      error: error,
    });
  }
};
