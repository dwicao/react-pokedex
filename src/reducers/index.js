import { combineReducers } from 'redux';
import pokelist from './pokelistReducer';
import pokedetail from './pokedetailReducer';
import pokefilter from './pokefilterReducer';
import pokelisttype from './pokelisttypeReducer';

const rootReducer = combineReducers({
  pokelist,
  pokedetail,
  pokefilter,
  pokelisttype,
});

export default rootReducer;