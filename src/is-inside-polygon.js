const isLeftOfSegment = require('./is-left-of');

/**
 * Returns true if the given `testPoint` is inside the polygon defined in `verticies`.
 * @param {object[]} verticies An array of objects representing the coordinates for the verticies
 * defining the polygon. The last vertex will be interpreted to connect to the first vertex. Each
 * vertex object should contain an `x` and `y` property.
 *
 * This function uses a [ray casting algorithm](https://rosettacode.org/wiki/Ray-casting_algorithm#JavaScript)
 * to perform this check. Note that if the test point is along any segment at any vertex, this
 * function will return `false`.
 *
 * @param {object} testPoint An object containing an `x` and `y` property, representing the point to
 * test.
 * @return {boolean} True if the point is inside the polygon.
 */
const isInsidePolygon = (verticies, testPoint) => {
  let countOfSegmentsToRight = 0;

  verticies.forEach((vertex, index) => {
    const vertexA = vertex;

    // Find next vertex in polygon, wrapping to the first one at the end
    const vertexB = verticies[(index + 1) % verticies.length];

    if (isLeftOfSegment(vertexA, vertexB, testPoint)) {
      countOfSegmentsToRight += 1;
    }
  });

  // If count of segments to the right is even, then the test point is outside of the polygon
  return countOfSegmentsToRight % 2 !== 0;
};

module.exports = isInsidePolygon;
