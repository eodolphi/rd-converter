import * as types from '../constants/actionTypes';

export function setCoordinates(coordinates) {
  return {type: types.SET_COORDINATES, coordinates};
}
