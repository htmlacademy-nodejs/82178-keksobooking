// Utils
const randomInteger = require(`../../utils/random-integer`);

const MIN_RANGE = 150;
const MAX_RANGE = 500;

const generatePositionY = (minRange = MIN_RANGE, maxRange = MAX_RANGE) =>
  randomInteger(minRange, maxRange);

module.exports = generatePositionY;
