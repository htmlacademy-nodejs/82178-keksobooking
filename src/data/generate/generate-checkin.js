// Utils
const randomInteger = require(`../../utils/random-integer`);

const MIN_HOUR = 2;
const MAX_HOUR = 4;

const generateCheckin = () => `1${randomInteger(MIN_HOUR, MAX_HOUR)}:00`;

module.exports = generateCheckin;
