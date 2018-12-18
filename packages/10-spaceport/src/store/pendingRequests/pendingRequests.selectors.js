import { createSelector } from 'reselect';

export const pendingRequestsSelector = ({ pendingRequests }) => pendingRequests;

export const pendingRequestsCountSelector = createSelector(
  pendingRequestsSelector,
  pendingRequests => pendingRequests.length,
);

export const pendingRequestSelectorFactory = requestId =>
  createSelector(pendingRequestsSelector, pendingRequests =>
    pendingRequests.find(({ id }) => id === requestId),
  );
