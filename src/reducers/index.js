import { combineReducers } from 'redux';
import pokelist from './pokelistReducer';

const rootReducer = combineReducers({
  pokelist
});

export default rootReducer;