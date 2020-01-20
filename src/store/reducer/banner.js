import * as actionTypes from '../action/types';

const initialState = {
  banner: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BANNER_SUCCESS:
      return {
        ...state,
        banner: action.banner
      };
    default:
      return state;
  }
};

export default reducer;
