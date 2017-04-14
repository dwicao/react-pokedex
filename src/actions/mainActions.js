import * as types from './actionTypes';

export function addBlahblahblah(text) {
  return {
    type: types.ADD_BLAHBLAHBLAH,
    payload: {
      text
    }
  };
}