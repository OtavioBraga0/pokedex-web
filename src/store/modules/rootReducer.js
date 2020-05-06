import { combineReducers } from 'redux';

import pokedex from './pokedex/reducer';
import pokemon from './pokemon/reducer';

export default combineReducers({
  pokedex,
  pokemon,
});
