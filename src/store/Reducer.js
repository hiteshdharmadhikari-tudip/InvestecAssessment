import * as ActionTypes from './ActionTypes';
const initialState = {
  user: {
    username: 'Guest',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        user: {...state.user, username: action.payload.username},
      };
    default:
      return state;
  }
};
