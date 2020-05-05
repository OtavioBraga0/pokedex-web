import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { getJokeSuccess } from './actions';

function* getJoke({ category }) {
  const response = yield call(api.get, `/random?category=${category}`);

  yield put(getJokeSuccess(response.data));
}

export default all([takeLatest('@joke/GET_REQUEST', getJoke)]);
