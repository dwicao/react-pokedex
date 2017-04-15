import axios from 'axios';
import * as types from './actionTypes';

export const fetchPokemon = (offset) => (dispatch) => {
  const noOffset = 'http://pokeapi.salestock.net:8000/api/v2/pokemon-form/';
  const withOffset = `http://pokeapi.salestock.net:8000/api/v2/pokemon-form/?offset=${offset}`;
  const uri = offset ? withOffset : noOffset;

  axios.get(uri)
    .then(res => dispatch(addPokemon(res.data.results)));
};

export const addPokemon = (payload) => ({
  type: types.ADD_POKEMON,
  payload
});