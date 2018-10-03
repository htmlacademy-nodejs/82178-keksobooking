// Data
const {author} = require(`../../package.json`);

// Utils
const {print} = require(`../utils/print`);

module.exports = {
  name: `author`,
  description: `Выводит автора программы`,
  execute() {
    print(`Автор - ${author}`);
  }
};
