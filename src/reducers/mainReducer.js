import * as types from '../actions/actionTypes';

export default function mainReducer(state = [], action) {
  switch(action.type) {

    case types.ADD_BLAHBLAHBLAH:
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }

}