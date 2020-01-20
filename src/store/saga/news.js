import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../action/index';

//获取所有新闻动态
export function* getNewsSaga() {
  yield put(actions.startLoading());
  try {
    const response = yield axios.get('/posts?_limit=12');
    yield put(actions.getNewsSuccess(response.data));
    yield put(actions.stopLoading());
  } catch (error) {
    yield put(actions.showSnackbar('error', error.message));
  }
}
