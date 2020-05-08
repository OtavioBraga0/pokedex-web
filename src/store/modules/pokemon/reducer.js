import produce from 'immer';

export default function pokemon(state = {}, action) {
  switch (action.type) {
    case '@pokemon/GET_SUCCESS':
      return produce(state, draft => {
        draft.data = action.pokemon;
      });
    case '@pokemon/GET_WEAKNESSES_SUCCESS':
      return produce(state, draft => {
        draft.weaknesses = action.weaknesses;
      });
    default:
      return state;
  }
}
