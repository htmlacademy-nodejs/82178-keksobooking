// Utils
const randomSort = require(`../../utils/random-sort`);

const OFFER_PHOTOS = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];

const generateOfferPhotos = () => randomSort(OFFER_PHOTOS);

module.exports = generateOfferPhotos;
