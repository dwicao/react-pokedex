import * as types from '../actions/actionTypes';

export default function pokelistReducer(state = [], action) {
  switch(action.type) {

    case types.ADD_POKEMON:
      return [
        ...state,
        action.payload
      ];

    case types.ADD_POKEMON_BY_TYPE:
      return action.payload;

    case types.CLEAR_POKEMON_LIST:
      return action.payload;

    default:
      return state;
  }

}