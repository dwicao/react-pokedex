import * as types from '../actions/actionTypes';

export default function pokelisttypeReducer(state = [], action) {
  switch(action.type) {

    case types.ADD_POKEMON_BY_TYPE:
      return action.payload;

    
    case types.CLEAR_POKEMON_LIST_BY_TYPE:
      return action.payload;

    default:
      return state;
  }

}