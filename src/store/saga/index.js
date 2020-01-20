import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../action/types';
import { getNewsSaga } from './news';
import { getBannerSaga } from './banner';

export function* watchNews() {
  yield takeEvery(actionTypes.GET_NEWS, getNewsSaga);
}

export function* watchBanner() {
  yield takeEvery(actionTypes.GET_BANNER, getBannerSaga);
}
