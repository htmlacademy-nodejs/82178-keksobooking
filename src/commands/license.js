// Data
const {license} = require(`../../package.json`);

// Utils
const {print} = require(`../utils/print`);

module.exports = {
  name: `license`,
  description: `Выводит информацию о типе лицензии`,
  execute() {
    const message = `Тип лицензии - ${license}`;

    print(message);
  }
};
