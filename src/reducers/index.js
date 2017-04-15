import { combineReducers } from 'redux';
import pokelist from './pokelistReducer';
import pokedetail from './pokedetailReducer';

const rootReducer = combineReducers({
  pokelist,
  pokedetail,
});

export default rootReducer;