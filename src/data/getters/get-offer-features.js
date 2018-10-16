const generateOfferFeatures = require(`../generate/generate-offer-features`);

const getOfferFeatures = () => {
  const features = generateOfferFeatures();
  const uniqFeatures = Array.from(new Set(features));

  return uniqFeatures;
};

module.exports = getOfferFeatures;
