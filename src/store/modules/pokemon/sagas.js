import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPokemonSuccess } from './actions';

async function fetchPokemonData(data, field = '', url) {
  const pokemonsDetails = data.map(async item => {
    const response = await api.get(`${url}${item[`${field}`].name}`);
    return response.data;
  });

  const response = await Promise.all(pokemonsDetails).then(res => res);

  return response;
}

function* getPokemon({ id }) {
  let response = yield call(api.get, `/pokemon/${id}`);

  const pokemon = response.data;

  pokemon.abilitiesDetails = yield fetchPokemonData(
    pokemon.abilities,
    'ability',
    '/ability/'
  );

  pokemon.typesDetails = yield fetchPokemonData(
    pokemon.types,
    'type',
    '/type/'
  );

  response = yield call(api.get, `/pokemon-species/${id}`);
  pokemon.pokemonSpeciesDetails = response.data;

  const evolutionId = pokemon.pokemonSpeciesDetails.evolution_chain.url.split(
    '/evolution-chain/'
  )[1];
  response = yield call(api.get, `/evolution-chain/${evolutionId}`);
  pokemon.evolutionChain = response.data;

  yield put(getPokemonSuccess(pokemon));
}

export default all([takeLatest('@pokemon/GET_REQUEST', getPokemon)]);
