import { expect } from 'chai';
import {setCoordinates} from '../actions/converterActions';
import reducer from './converter.js';

describe('Reducers::Converter', () => {
  const result = reducer(null, setCoordinates([199735, 307365]));
  expect(result.converted.coordinates).to.deep.equal([6.021098134177521, 50.754497605589414]);
  expect(result.converted.type).to.equal('gps');


  const next_result = reducer(null, setCoordinates([5.8, 50.6]));
  expect(next_result.converted.coordinates).to.deep.equal([184228.85005956527, 290065.7086679214]);
  expect(next_result.converted.type).to.equal('rd');
});
