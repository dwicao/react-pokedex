import * as types from '../actions/actionTypes';

const initialState = {
    isFilterByPokemonType: false,
    type: 'any',
};

export default function pokelistReducer(state = initialState, action) {
  switch(action.type) {

    case types.FILTER_POKEMON_BY_TYPE:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }

}