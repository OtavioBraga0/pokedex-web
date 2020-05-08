import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPokemonSuccess, getWeaknessesSuccess } from './actions';

function* getPokemon({ id }) {
  const response = yield call(api.get, `/pokemon/${id}`);

  yield put(getPokemonSuccess(response.data));
}

function* getWeaknesses({ name }) {
  const response = yield call(api.get, `/type/${name}`);

  yield put(getWeaknessesSuccess(response.data));
}

export default all([
  takeLatest('@pokemon/GET_REQUEST', getPokemon),
  takeLatest('@pokemon/GET_WEAKNESSES_REQUEST', getWeaknesses),
]);
