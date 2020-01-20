import * as actionTypes from '../action/types';

const initialState = {
  news: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.news
      };
    default:
      return state;
  }
};

export default reducer;
