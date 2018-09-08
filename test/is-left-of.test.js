const { expect } = require('chai');
const isLeftOf = require('../src/is-left-of');

const lineSegment = {
  lowerPoint: { x: 0, y: 0 },
  upperPoint: { x: 10, y: 10 },
};

const testCases = [
  {
    pointDescription: 'fully above',
    point: { x: 5, y: 11 },
    expectedValue: false,
  },
  {
    pointDescription: 'fully below',
    point: { x: 5, y: -1 },
    expectedValue: false,
  },
  {
    pointDescription: 'fully to the right of',
    point: { x: 11, y: 5 },
    expectedValue: false,
  },
  {
    pointDescription: 'fully to the left of',
    point: { x: -1, y: 5 },
    expectedValue: true,
  },
  {
    pointDescription: 'to the left of',
    point: { x: 2, y: 8 },
    expectedValue: true,
  },
  {
    pointDescription: 'to the right of',
    point: { x: 8, y: 2 },
    expectedValue: false,
  },
  {
    pointDescription: 'at the lower point of',
    point: { x: 0, y: 0 },
    expectedValue: false,
  },
  {
    pointDescription: 'at the upper point of',
    point: { x: 10, y: 10 },
    expectedValue: false,
  },
  {
    pointDescription: 'along the slope of',
    point: { x: 5, y: 5 },
    expectedValue: false,
  },
];

describe('The isLeftOf function', () => {
  testCases.forEach(({ pointDescription, point, expectedValue }) => {
    it(`returns ${expectedValue} for points ${pointDescription} the line segment`, () => {
      expect(isLeftOf(lineSegment.lowerPoint, lineSegment.upperPoint, point))
        .to.equal(expectedValue);
    });
  });
});
