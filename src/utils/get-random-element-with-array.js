// Utils
const randomInteger = require(`./random-integer`);

const getRandomElementWithArray = (list = [], min = 0, max = list.length - 1) => {
  if (max < 1 || min < 0 || max < min) {
    return null;
  }

  const randomIndex = randomInteger(min, max);
  const randomElement = list[randomIndex];

  return randomElement;
};

module.exports = getRandomElementWithArray;
