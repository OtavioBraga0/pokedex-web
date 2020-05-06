import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPokedexSuccess } from './actions';

function* getPokedex() {
  const response = yield call(api.get, `/pokedex/2`);

  yield put(getPokedexSuccess(response.data));
}

export default all([takeLatest('@pokedex/GET_REQUEST', getPokedex)]);
