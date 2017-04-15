import * as types from '../actions/actionTypes';

export default function pokelistReducer(state = [], action) {
  switch(action.type) {

    case types.ADD_POKEMON:
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }

}