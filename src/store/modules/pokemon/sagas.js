import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPokemonSuccess } from './actions';

function* getPokemon({ id }) {
  const response = yield call(api.get, `/pokemon/${id}`);

  yield put(getPokemonSuccess(response.data));
}

export default all([takeLatest('@pokemon/GET_REQUEST', getPokemon)]);
