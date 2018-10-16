// Utils
const randomInteger = require(`../../utils/random-integer`);

const SECOND_IN_ONE_DAY = 86400;
const SECOND_IN_SEVEN_DAYS = SECOND_IN_ONE_DAY * 7;

const generateEntityDate = () => {
  const currentTime = new Date().getTime();
  return randomInteger(currentTime - SECOND_IN_SEVEN_DAYS, currentTime);
};

module.exports = generateEntityDate;
