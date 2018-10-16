// Utils
const randomInteger = require(`./random-integer`);

const randomSort = (list) =>
  [...list].sort(() => {
    const randomNum = randomInteger(0, 100);

    if (randomNum <= 33) {
      return -1;
    }

    if (randomNum <= 66) {
      return 1;
    }

    return 0;
  });

module.exports = randomSort;
