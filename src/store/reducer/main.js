import * as actionTypes from '../action/types';

const initialState = {
  loading: false,
  redirectPath: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
        snackbar: null
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case actionTypes.SET_REDIRECT_PATH:
      return {
        ...state,
        redirectPath: action.redirectPath
      };
    default:
      return state;
  }
};

export default reducer;
