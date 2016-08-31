import { expect } from 'chai';
import {setCoordinates} from './converterActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {
  expect(setCoordinates([123, 456])).to.be.deep.equal({
    type: ActionTypes.SET_COORDINATES,
    coordinates: [123, 456]
  });
});
