// Utils
const randomInteger = require(`../../utils/random-integer`);

const generateOfferRooms = () => {
  const MIN_ROOMS = 1;
  const MAX_ROOMS = 5;

  return randomInteger(MIN_ROOMS, MAX_ROOMS);
};

module.exports = generateOfferRooms;
