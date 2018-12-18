import { createSelector } from 'reselect';

export const shipsSelector = ({ ships }) => ships;

export const shipSelectorFactory = shipId =>
  createSelector(shipsSelector, ships => ships.find(({ id }) => id === shipId));
