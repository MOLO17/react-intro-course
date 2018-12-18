import uuid from 'uuid/v4';

import { getContext, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { createError } from '../errors/errors.actions';

import {
  SHIPS_LIST_REQUIRED,
  SHIP_CREATE_REQUIRED,
  SHIP_UPDATE_REQUIRED,
  SHIP_DELETE_REQUIRED,
  setShips as setShipsAction,
  createShip as createShipAction,
  updateShip as updateShipAction,
  deleteShip as deleteShipAction,
} from './ships.actions';

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

    yield put(setShipsAction(ships));

  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }

  yield put(deletePendingRequest(requestId));
}

function* addShip({ color, category }) {
  const requestId = uuid();
  yield put(createPendingRequest(requestId));

  try {
    const shipsDataSource = yield getContext('shipsDataSource');

    const { id, ...ship } = yield call(shipsDataSource.addShip, {
      color,
      category,
    });

    yield put(createShipAction(id, ship));

  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }

  yield put(deletePendingRequest(requestId));
}

function* updateShip({ id: shipId, category, color }) {
  const requestId = uuid();
  yield put(createPendingRequest(requestId));

  try {
    const shipsDataSource = yield getContext('shipsDataSource');

    const { id, ...ship } = yield call(shipsDataSource.editShip, shipId, {
      category,
      color,
    });

    yield put(updateShipAction(id, ship));

  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }

  yield put(deletePendingRequest(requestId));
}

function* removeShip({ id }) {
  const requestId = uuid();
  yield put(createPendingRequest(requestId));

  try {
    const shipsDataSource = yield getContext('shipsDataSource');

    yield call(shipsDataSource.removeShip, id);

    yield put(deleteShipAction(id));

  } catch (error) {
    const errorId = uuid();

    yield put(createError(errorId, error.message));
  }

  yield put(deletePendingRequest(requestId));
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Export all sagas
////////////////////////////////////////////////////////////////////////////////////////////////////

export default [
  takeLatest(SHIPS_LIST_REQUIRED, getShips),

  takeEvery(SHIP_CREATE_REQUIRED, addShip),
  takeEvery(SHIP_UPDATE_REQUIRED, updateShip),
  takeEvery(SHIP_DELETE_REQUIRED, removeShip),
];
