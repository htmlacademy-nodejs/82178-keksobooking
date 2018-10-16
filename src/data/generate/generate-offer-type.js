// Utils
const randomInteger = require(`../../utils/random-integer`);

const OFFER_TYPEN = [`flat`, `palace`, `house`, `bungalo`];

const generateOfferType = () => OFFER_TYPEN[randomInteger(0, OFFER_TYPEN.length)];

module.exports = generateOfferType;
