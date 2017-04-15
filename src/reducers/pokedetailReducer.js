import * as types from '../actions/actionTypes';

export default function pokelistReducer(state = {}, action) {
  switch(action.type) {

    case types.ADD_POKEMON_DETAIL:
      return action.payload;

    default:
      return state;
  }

}