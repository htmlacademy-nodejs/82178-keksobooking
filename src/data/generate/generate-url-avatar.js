// Utils
const randomInteger = require(`../../utils/random-integer`);

const generateUrlAvatar = () => `https://robohash.org/${randomInteger(0, 10000)}`;

module.exports = generateUrlAvatar;
