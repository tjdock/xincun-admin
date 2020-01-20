import * as actionTypes from './types';

export const getNews = () => {
  return { type: actionTypes.GET_NEWS };
};
export const getNewsSuccess = news => {
  return { type: actionTypes.GET_NEWS_SUCCESS, news };
};
