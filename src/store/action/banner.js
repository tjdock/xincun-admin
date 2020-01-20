import * as actionTypes from './types';

export const getBanner = () => {
  return { type: actionTypes.GET_BANNER };
};
export const getBannerSuccess = banner => {
  return { type: actionTypes.GET_BANNER_SUCCESS, banner };
};
