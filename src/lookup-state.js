const states = require('../data/states.json');
const isInsidePolygon = require('./is-inside-polygon');

const convertStateDataToPolygon = border =>
  border.reduce((previousVerticies, coordinates, index, array) => {
    // Don't convert the last coordinate, as isInsidePolygon does not need it
    if (index === array.length - 1) {
      return previousVerticies;
    }

    return [...previousVerticies, { x: coordinates[0], y: coordinates[1] }];
  }, []);

/**
 * Given the longitude and latitude of a point on earth, returns the name of the state the point
 * exists in (using the data defined in `../data/states.json`), or the string
 * `'Coordinate is not located in any defined state'`, if point falls outside of any defined state.
 *
 * @param {number} longitude The longitude of a point on each
 * @param {number} latitude The latitude of a point on earth
 * @return {string} The name of the state, or message if not found in a state.
 */
const lookupState = (longitude, latitude) => {
  const foundState = states.find((state) => {
    const polygon = convertStateDataToPolygon(state.border);

    return isInsidePolygon(polygon, { x: longitude, y: latitude });
  });

  if (foundState) {
    return foundState.state;
  }

  return 'Coordinate is not located in any defined state';
};

module.exports = lookupState;
