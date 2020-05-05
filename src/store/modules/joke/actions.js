export function getJokeRequest(category) {
  return { type: '@joke/GET_REQUEST', category };
}

export function getJokeSuccess(joke) {
  return { type: '@joke/GET_SUCCESS', joke };
}
