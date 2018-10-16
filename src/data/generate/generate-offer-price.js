// Utils
const randomInteger = require(`../../utils/random-integer`);

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;

const generateOfferPrice = () => randomInteger(MIN_PRICE, MAX_PRICE);

module.exports = generateOfferPrice;
