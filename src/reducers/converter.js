import {SET_COORDINATES} from '../constants/actionTypes';
import convert from '../utils/convert';
import initialState from './initialState';


export default function ConverterReducer(state = initialState.converter, action) {
  let converted;
  switch (action.type) {
    case SET_COORDINATES:
      converted = convert(action.coordinates);

      if (converted) {
        return  {
          input: action.coordinates,
          converted: converted,
          zoomLevel: 11,
          center: (converted.type === 'gps') ? converted.coordinates : action.coordinates
        };
      } else {
        return initialState.converter;
      }
    default:
      return state;
  }
}
