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

export const removeShip = id => ({
  type: SHIP_DELETED,
  id,
});

/**
 * Require ships list
 */
export const SHIPS_LIST_REQUIRED = 'SHIPS_LIST_REQUIRED';

export const requireShipsList = () => ({
  type: SHIPS_LIST_REQUIRED,
});

/**
 * Set ships list
 */
export const SHIPS_STATE_SET = 'SHIPS_STATE_SET';

export const setShips = ships => ({
  type: SHIPS_STATE_SET,
  ships,
});
