import { all } from 'redux-saga/effects';

import pokedex from './pokedex/sagas';
import pokemon from './pokemon/sagas';

export default function* rootSaga() {
  return yield all([pokedex, pokemon]);
}
