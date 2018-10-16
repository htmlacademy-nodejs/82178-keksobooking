// Utils
const randomInteger = require(`../../utils/random-integer`);

const MIN_RANGE = 300;
const MAX_RANGE = 900;

const generatePositionX = (minRange = MIN_RANGE, maxRange = MAX_RANGE) =>
  randomInteger(minRange, maxRange);

module.exports = generatePositionX;
