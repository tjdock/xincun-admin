import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../action/index';

//获取banner
export function* getBannerSaga() {
  yield put(actions.startLoading());
  try {
    const response = yield axios.get('/albums/1/photos?_limit=3');
    yield put(actions.getBannerSuccess(response.data));
    yield put(actions.stopLoading());
  } catch (error) {
    yield put(actions.showSnackbar('error', error.message));
  }
}
