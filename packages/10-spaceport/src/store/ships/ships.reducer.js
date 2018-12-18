import { SHIP_CREATED, SHIP_UPDATED, SHIPS_STATE_SET } from './ships.actions';

const shipsReducer = (state = [], action) => {
  switch (action.type) {
    case SHIP_CREATED: {
      const { id, category, color } = action;

      return [...state, { id, category, color }];
    }

    case SHIP_UPDATED: {
      const { category, color } = action;

      return state.map(
        ({ id, ...ship }) =>
          action.id === id
            ? {
                id,
                ...ship,
                ...(typeof category === 'string' ? { category } : {}),
                ...(typeof color === 'string' ? { color } : {}),
              }
            : { id, ...ship },
      );
    }

    case SHIPS_STATE_SET: {
      return action.ships;
    }

    default: {
      return state;
    }
  }
};

export default shipsReducer;
