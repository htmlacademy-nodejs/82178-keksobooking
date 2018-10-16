// Utils
const randomInteger = require(`../../utils/random-integer`);

const OFFER_FEATURES = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`
];

const generateOfferFeatures = () =>
  Array(OFFER_FEATURES.length)
    .fill(``)
    .reduce((acc) => {
      const randomIndex = randomInteger(0, OFFER_FEATURES.length - 1);
      const randomElement = OFFER_FEATURES[randomIndex];

      return [...acc, randomElement];
    }, []);

module.exports = generateOfferFeatures;
