export function getPokemonRequest(id) {
  return { type: '@pokemon/GET_REQUEST', id };
}

export function getPokemonSuccess(pokemon) {
  return { type: '@pokemon/GET_SUCCESS', pokemon };
}
