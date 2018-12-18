/**
 * Create error
 */
export const PENDING_REQUEST_CREATED = 'PENDING_REQUEST_CREATED';

export const createPendingRequest = id => ({
  type: PENDING_REQUEST_CREATED,
  id,
});

/**
 * Delete error
 */
export const PENDING_REQUEST_DELETED = 'PENDING_REQUEST_DELETED';

export const deletePendingRequest = id => ({
  type: PENDING_REQUEST_DELETED,
  id,
});
