import { all } from 'redux-saga/effects';

import joke from './joke/sagas';

export default function* rootSaga() {
  return yield all([joke]);
}
