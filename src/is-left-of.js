const isBelowSegment = (lowerPoint, testPoint) => testPoint.y <= lowerPoint.y;

const isAboveSegment = (upperPoint, testPoint) => testPoint.y > upperPoint.y;

const isFullyRightOfSegment = (lowerPoint, upperPoint, testPoint) =>
  testPoint.x >= lowerPoint.x && testPoint.x >= upperPoint.x;

const isFullyLeftOfSegment = (lowerPoint, upperPoint, testPoint) =>
  testPoint.x < lowerPoint.x && testPoint.x < upperPoint.x;

const getSlope = (pointA, pointB) => Math.abs(pointA.y - pointB.y) / Math.abs(pointA.x - pointB.x);

/**
 * Given a lower point of a line segment, and upper point of a line segment, and a test point,
 * this function determines if the point is to the left of the segment, returning true if so.
 * All parameters must be objects containing the points' coordinates as `x` and `y` properties.
 *
 * This function uses a [ray casting algorithm](https://rosettacode.org/wiki/Ray-casting_algorithm#JavaScript)
 * to perform this check. Note that if the test point is on the segment or at either vertex, this
 * function will return `false`.
 *
 * @param {object} lowerPoint The lower point of the segment
 * @param {object} upperPoint The upper point of the segment
 * @param {object} testPoint The point to test
 * @return {boolean} True of if the point is left the segment, false if otherwise
 */
const isLeftOfSegment = (lowerPoint, upperPoint, testPoint) => {
  // If the lower point is above the upper point, call the function again with the points reversed
  if (lowerPoint.y > upperPoint.y) {
    return isLeftOfSegment(upperPoint, lowerPoint, testPoint);
  }

  // If the test point is above, below, or fully right of the segment, it cannot intersect
  if (
    isBelowSegment(lowerPoint, testPoint)
    || isAboveSegment(upperPoint, testPoint)
    || isFullyRightOfSegment(lowerPoint, upperPoint, testPoint)
  ) {
    return false;
  }

  // If the test point is fully left of the segment, it must intersect
  if (isFullyLeftOfSegment(lowerPoint, upperPoint, testPoint)) {
    return true;
  }

  /*
   * If the slope between the test point and the lower point is greater than the slope of the
   * segment, it must intersect
   */
  return getSlope(lowerPoint, testPoint) > getSlope(lowerPoint, upperPoint);
};

module.exports = isLeftOfSegment;
