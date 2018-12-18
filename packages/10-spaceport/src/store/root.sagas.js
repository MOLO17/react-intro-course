import { all } from 'redux-saga/effects';

import shipsSagas from './ships/ships.sagas';

export default function*() {
  yield all([...shipsSagas]);
}
