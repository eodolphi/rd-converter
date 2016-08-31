import chai from 'chai';
import chaiStats from 'chai-stats';
import convert, {projection} from './convert';

chai.use(chaiStats);
const expect = chai.expect;


describe('Projection', () => {
  it('returns the correct GPS coordinates if given RD coordinates', () => {
    let gps = projection.inverse([199735, 307365]);

    expect(gps).to.almost.eql([6.02110, 50.75450], 5);
  });
  it('returns the correct RD coordinates if given GPS coordinates', () => {
    let gps = projection.forward([4.9084792, 52.3724188]);

    expect(gps).to.almost.eql([122399, 487279], 0);
  });
});



describe('Coverter', () => {
  it('returns the correct GPS coordinates if given RD coordinates', () => {
    let result = convert([199735, 307365]);

    expect(result.coordinates).to.almost.eql([6.02110, 50.75450], 5);
  });

  it('returns the correct RD coordinates if given GPS coordinates', () => {
    let result = convert([4.9084792, 52.3724188]);

    expect(result.coordinates).to.almost.eql([122399, 487279], 0);
  });

  it('returns null if the coordinates are out of range', () => {
    let result = convert([500, 500]);

    expect(result).to.be.null;
  });
});




