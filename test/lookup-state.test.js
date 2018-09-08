const { expect } = require('chai');
const lookupState = require('../src/lookup-state');

describe('The lookupState function', () => {
  it('correctly identifies a state', () => {
    expect(lookupState(-77, 40)).to.equal('Pennsylvania');
  });

  it('correctly identifies a state while being close to the border', () => {
    expect(lookupState(-80.517417, 40.192276)).to.equal('Pennsylvania');
  });

  it('correctly identifies an oddly-shaped state', () => {
    expect(lookupState(-101.786949, 36.752942)).to.equal('Oklahoma');
  });

  it('displays message when not in any defined state', () => {
    expect(lookupState(-108, 56)).to.equal('Coordinate is not located in any defined state');
  });
});
