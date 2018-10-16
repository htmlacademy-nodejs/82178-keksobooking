const randomInteger = (min = 0, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

module.exports = randomInteger;
