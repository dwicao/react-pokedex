import axios from 'axios';
import * as types from './actionTypes';

export const addPokemon = payload => ({
  type: types.ADD_POKEMON,
  payload,
});

export const addPokemonByType = payload => ({
  type: types.ADD_POKEMON_BY_TYPE,
  payload,
});

export const addPokemonDetail = payload => ({
  type: types.ADD_POKEMON_DETAIL,
  payload,
});

export const filterPokemonByType = payload => ({
  type: types.FILTER_POKEMON_BY_TYPE,
  payload,
});

export const clearPokemonList = payload => ({
  type: types.CLEAR_POKEMON_LIST,
  payload,
});

export const fetchPokemon = offset => dispatch => {
  const noOffset = 'http://pokeapi.salestock.net:8000/api/v2/pokemon-form/';
  const withOffset = `http://pokeapi.salestock.net:8000/api/v2/pokemon-form/?offset=${offset}`;
  const uri = offset ? withOffset : noOffset;

  axios.get(uri)
    .then(({ data }) => dispatch(addPokemon(data.results)));
};

export const fetchPokemonDetail = pokemonId => dispatch => {
  const uri = `http://pokeapi.salestock.net:8000/api/v2/pokemon/${pokemonId}/`;

  axios.get(uri)
    .then(({ data }) => dispatch(addPokemonDetail(data)));
}

export const fetchPokemonByType = type => dispatch => {
  const uri = `http://pokeapi.salestock.net:8000/api/v2/type/${type}/`;

  axios.get(uri)
    .then(({ data }) => dispatch(addPokemonByType(data.pokemon)));
};
