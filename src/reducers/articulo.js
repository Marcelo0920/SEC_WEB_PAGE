import {
  GET_ARTICULO,
  GET_ARTICULOS,
  POST_ARTICULO,
  UPDATE_ARTICULO,
  DELETE_ARTICULO,
  ARTICULO_ERROR,
  ARTICULO_START,
  DEFAULT_ARTICLE,
} from "../actions/types";

const initialState = {
  articulos: [],
  articulo: null,
  publishSucceed: false,
  publishError: false,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICULOS:
      return {
        ...state,
        articulos: payload,
        loading: false,
      };

    case DEFAULT_ARTICLE:
      return {
        ...state,
        publishError: false,
        publishSucceed: false,
      };

    case ARTICULO_START:
      return {
        ...state,
        loading: true,
      };

    case GET_ARTICULO:
      return {
        ...state,
        articulo: payload,
        loading: false,
      };

    case UPDATE_ARTICULO:
      return {
        ...state,
        articulo: payload,
        loading: false,
      };

    case POST_ARTICULO:
      return {
        ...state,
        articulo: [payload, ...state.articulos],
        publishSucceed: true,
        loading: false,
      };

    case ARTICULO_ERROR:
      return {
        ...state,
        error: payload,
        publishError: true,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
