import produce from 'immer';

export default function pokedex(state = {}, action) {
  switch (action.type) {
    case '@pokedex/GET_SUCCESS':
      return produce(state, draft => {
        draft.data = action.pokedex;
      });
    default:
      return state;
  }
}
