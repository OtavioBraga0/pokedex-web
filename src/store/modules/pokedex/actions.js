export function getPokedexRequest() {
  return { type: '@pokedex/GET_REQUEST' };
}

export function getPokedexSuccess(pokedex) {
  return { type: '@pokedex/GET_SUCCESS', pokedex };
}
