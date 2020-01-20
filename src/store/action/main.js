import * as actionTypes from './types';
import { message } from 'antd';

export const startLoading = () => {
  return { type: actionTypes.START_LOADING };
};
export const stopLoading = () => {
  return { type: actionTypes.STOP_LOADING };
};
export const showSnackbar = (type, msg) => {
  if (type === 'error') {
    message.error(msg);
  } else if (type === 'success') {
    message.success(msg);
  } else {
    alert('unknown type');
  }
  return { type: actionTypes.STOP_LOADING };
};
export const setRedirectPath = redirectPath => {
  return { type: actionTypes.SET_REDIRECT_PATH, redirectPath };
};
