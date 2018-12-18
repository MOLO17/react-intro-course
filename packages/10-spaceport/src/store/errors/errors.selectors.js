import { createSelector } from 'reselect';

export const errorsSelector = ({ errors }) => errors;

export const errorSelectorFactory = errorId =>
  createSelector(errorsSelector, errors =>
    errors.find(({ id }) => id === errorId),
  );
