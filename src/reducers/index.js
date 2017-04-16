import { combineReducers } from 'redux';
import pokelist from './pokelistReducer';
import pokedetail from './pokedetailReducer';
import pokefilter from './pokefilterReducer';

const rootReducer = combineReducers({
  pokelist,
  pokedetail,
  pokefilter,
});

export default rootReducer;