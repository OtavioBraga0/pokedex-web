export function getPokemonRequest(id) {
  return { type: '@pokemon/GET_REQUEST', id };
}

export function getPokemonSuccess(pokemon) {
  return { type: '@pokemon/GET_SUCCESS', pokemon };
}

export function getWeaknessesRequest(name) {
  return { type: '@pokemon/GET_WEAKNESSES_REQUEST', name };
}

export function getWeaknessesSuccess(weaknesses) {
  return { type: '@pokemon/GET_WEAKNESSES_SUCCESS', weaknesses };
}
