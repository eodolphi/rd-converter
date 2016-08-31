import { combineReducers } from 'redux';
import converter from './converter';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  converter,
  routing: routerReducer
});

export default rootReducer;
