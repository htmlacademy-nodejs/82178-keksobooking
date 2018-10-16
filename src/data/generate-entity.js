const getAvatar = require(`./getters/get-avatar`);
const getLocation = require(`./getters/get-location`);
const getOfferTitle = require(`./getters/get-offer-title`);
const getOfferAddres = require(`./getters/get-offer-address`);
const getOfferPrice = require(`./getters/get-offer-price`);
const getOfferType = require(`./getters/get-offer-type`);
const getOfferRooms = require(`./getters/get-offer-rooms`);
const getOfferGuests = require(`./getters/get-offer-guests`);
const getOfferCheckin = require(`./getters/get-offer-checkin`);
const getOfferCheckout = require(`./getters/get-offer-checkout`);
const getOfferFeatures = require(`./getters/get-offer-features`);
const getOfferDescription = require(`./getters/get-offer-description`);
const getOfferPhotos = require(`./getters/get-offer-photos`);
const getDate = require(`./getters/get-date`);

const generateEntity = () => {
  const {x, y} = getLocation();

  return {
    author: {
      avatar: getAvatar()
    },
    offer: {
      title: getOfferTitle(),
      address: getOfferAddres(x, y),
      price: getOfferPrice(),
      type: getOfferType(),
      rooms: getOfferRooms(),
      guests: getOfferGuests(),
      checkin: getOfferCheckin(),
      checkout: getOfferCheckout(),
      features: getOfferFeatures(),
      description: getOfferDescription(),
      photos: getOfferPhotos()
    },
    location: {x, y},
    date: getDate()
  };
};

console.log(generateEntity());

module.exports = generateEntity;
