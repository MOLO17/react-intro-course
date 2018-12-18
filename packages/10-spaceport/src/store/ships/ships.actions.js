/**
 * Create ship
 */
export const SHIP_CREATED = 'SHIP_CREATED';

export const createShip = (id, { category, color }) => ({
  type: SHIP_CREATED,
  id,
  category,
  color,
});

/**
 * Update ship
 */
export const SHIP_UPDATED = 'SHIP_UPDATED';

export const updateShip = (id, { category, color }) => ({
  type: SHIP_UPDATED,
  id,
  category,
  color,
});

/**
 * Delete ship
 */
export const SHIP_DELETED = 'SHIP_DELETED';

export const deleteShip = id => ({
  type: SHIP_DELETED,
  id,
});

/**
 * Set ships list
 */
export const SHIPS_STATE_SET = 'SHIPS_STATE_SET';

export const setShips = ships => ({
  type: SHIPS_STATE_SET,
  ships,
});

/**
 * Require ships list
 */
export const SHIPS_LIST_REQUIRED = 'SHIPS_LIST_REQUIRED';

export const requireShipsList = () => ({
  type: SHIPS_LIST_REQUIRED,
});

/**
 * Require ship create
 */
export const SHIP_CREATE_REQUIRED = 'SHIP_CREATE_REQUIRED';

export const requireShipCreate = ({ category, color }) => ({
  type: SHIP_CREATE_REQUIRED,
  category,
  color,
});

/**
 * Require ship update
 */
export const SHIP_UPDATE_REQUIRED = 'SHIP_UPDATE_REQUIRED';

export const requireShipUpdate = (id, { category, color }) => ({
  type: SHIP_UPDATE_REQUIRED,
  id,
  category,
  color,
});

/**
 * Require ship update
 */
export const SHIP_DELETE_REQUIRED = 'SHIP_DELETE_REQUIRED';

export const requireShipDelete = id => ({
  type: SHIP_DELETE_REQUIRED,
  id,
});
