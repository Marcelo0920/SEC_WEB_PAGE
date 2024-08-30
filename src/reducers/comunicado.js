import {
  GET_COMUNICADO,
  GET_COMUNICADOS,
  POST_COMUNICADO,
  DELETE_COMUNICADO,
  UPDATE_COMUNICADO,
  COMUNICADO_ERROR,
} from "../actions/types";

const initialState = {
  comunicados: [],
  comunicado: null,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMUNICADOS:
      return {
        ...state,
        comunicados: payload,
        loading: false,
      };

    case GET_COMUNICADO:
      return {
        ...state,
        comunicado: payload,
        loading: false,
      };

    case UPDATE_COMUNICADO:
      return {
        ...state,
        comunicado: payload,
        loading: false,
      };

    case POST_COMUNICADO:
      return {
        ...state,
        comunicado: [payload, ...state.comunicados],
        loading: false,
      };

    case COMUNICADO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
