import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPokedexSuccess } from './actions';

async function fetchPokemonData(data, url) {
  const pokemonsDetails = data.map(async item => {
    const response = await api.get(`${url}${item.name}`);
    return response.data;
  });

  const response = await Promise.all(pokemonsDetails).then(res => res);

  return response;
}

function* getPokedex() {
  const response = yield call(api.get, `/pokemon?offset=0&limit=151`);

  const pokemons = response.data.results;

  const pokedex = yield fetchPokemonData(pokemons, '/pokemon/');

  yield put(getPokedexSuccess(pokedex));
}

export default all([takeLatest('@pokedex/GET_REQUEST', getPokedex)]);
