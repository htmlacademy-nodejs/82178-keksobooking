// Utils
const randomInteger = require(`../../utils/random-integer`);

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const generateOfferGuests = () => randomInteger(MIN_GUESTS, MAX_GUESTS);

module.exports = generateOfferGuests;
