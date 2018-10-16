// Utils
const getRandomElementWithArray = require(`../../utils/get-random-element-with-array`);

const OFFER_TITLES = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`
];

const generateOfferTitle = () => getRandomElementWithArray(OFFER_TITLES);

module.exports = generateOfferTitle;
