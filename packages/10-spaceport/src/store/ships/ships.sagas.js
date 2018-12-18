import uuid from 'uuid/v4';

import { getContext, call, put, takeEvery, fork } from 'redux-saga/effects';

import { createError } from '../errors/errors.actions';

import { setShips, SHIPS_LIST_REQUIRED, createShip, SHIP_CREATED, SHIP_DELETED } from './ships.actions';

import {
  createPendingRequest,
  deletePendingRequest,
} from '../pendingRequests/pendingRequests.actions';

////////////////////////////////////////////////////////////////////////////////////////////////////
// Workers
////////////////////////////////////////////////////////////////////////////////////////////////////

function* getShips() {
  const requestId = uuid();
  yield put(createPendingRequest(requestId));

  try {
    const shipsDataSource = yield getContext('shipsDataSource');

    const ships = yield call(shipsDataSource.getShips);

    yield put(setShips(ships));

    yield put(deletePendingRequest(requestId));
  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }
}

function* addShip({ color, category }) {
  const requestId = uuid();
  yield put(createPendingRequest(requestId));

  try {
    const shipsDataSource = yield getContext('shipsDataSource');

    yield call(shipsDataSource.addShip);

    yield put(deletePendingRequest(requestId));
  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }
}

function* removeShip() {
  const requestId = uuid();
  yield put(createPendingRequest(requestId));

  try {
    const shipsDataSource = yield getContext('shipsDataSource');

    const ships = yield call(shipsDataSource.addShip);

    yield put(setShips(ships));

    yield put(deletePendingRequest(requestId));
  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Export all sagas
////////////////////////////////////////////////////////////////////////////////////////////////////

export default [
  takeEvery(SHIPS_LIST_REQUIRED, getShips),
  takeEvery(SHIP_CREATED, addShip),
  takeEvery(SHIP_DELETED, removeShip),
];
