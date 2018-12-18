/**
 * Create error
 */
export const ERROR_CREATED = 'ERROR_CREATED';

export const createError = (id, message) => ({
  type: ERROR_CREATED,
  id,
  message,
});

/**
 * Delete error
 */
export const ERROR_DELETED = 'ERROR_DELETED';

export const deleteError = id => ({
  type: ERROR_DELETED,
  id,
});
