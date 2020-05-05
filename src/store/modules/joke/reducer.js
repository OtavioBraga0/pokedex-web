import produce from 'immer';

export default function joke(state = {}, action) {
  switch (action.type) {
    case '@joke/GET_SUCCESS':
      return produce(state, draft => {
        draft.data = action.joke;
      });
    default:
      return state;
  }
}
