import produce from 'immer';

export default function pokemon(state = {}, action) {
  switch (action.type) {
    case '@pokemon/GET_SUCCESS':
      return produce(state, draft => {
        draft.data = action.pokemon;
      });
    default:
      return state;
  }
}
