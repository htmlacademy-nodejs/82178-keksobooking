const generatePositionX = require(`../generate/generate-position-x`);
const generatePositionY = require(`../generate/generate-position-y`);

const getPositionX = () => generatePositionX();
const getPositionY = () => generatePositionY();

const getLocation = () => {
  const x = getPositionX();
  const y = getPositionY();

  return {x, y};
};

module.exports = getLocation;
