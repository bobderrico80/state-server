const { expect } = require('chai');
const isInsidePolygon = require('../src/is-inside-polygon');

const polygon = [
  { x: 2, y: 2 },
  { x: 4, y: 10 },
  { x: 10, y: 8 },
  { x: 6, y: 6 },
  { x: 10, y: 3 },
];

const testCases = [
  {
    pointDescription: 'to the left',
    point: { x: 2, y: 8 },
    expectedValue: false,
  },
  {
    pointDescription: 'to the right',
    point: { x: 10, y: 6 },
    expectedValue: false,
  },
  {
    pointDescription: 'above',
    point: { x: 10, y: 9 },
    expectedValue: false,
  },
  {
    pointDescription: 'below',
    point: { x: 10, y: 2 },
    expectedValue: false,
  },
  {
    pointDescription: 'inside',
    point: { x: 4, y: 4 },
    expectedValue: true,
  },
  {
    pointDescription: 'inside and near the edge',
    point: { x: 9, y: 8 },
    expectedValue: true,
  },
  {
    pointDescription: 'at a vertex',
    point: { x: 2, y: 2 },
    expectedValue: false,
  },
  {
    pointDescription: 'on an edge',
    point: { x: 9, y: 7 },
    expectedValue: false,
  },
];

describe('The isInsidePolygon function', () => {
  testCases.forEach(({ pointDescription, point, expectedValue }) => {
    it(`returns ${expectedValue} for a point ${pointDescription} of the polygon`, () => {
      expect(isInsidePolygon(polygon, point))
        .to.equal(expectedValue);
    });
  });
});
