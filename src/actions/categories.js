import axios from "axios";
import { CATEGORY_ERROR, GET_CATEGORIES } from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/categorias");

    // console.log(res.data.categories);

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data.categories,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
