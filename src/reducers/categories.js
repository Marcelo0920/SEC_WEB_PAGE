import { GET_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [],
  category: "",
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    default: {
      return state;
    }
  }
}
