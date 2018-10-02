// Data
const {description} = require(`../../package.json`);

// Utils
const {print} = require(`../utils/print`);

module.exports = {
  name: `description`,
  description: `Выводит описание программы`,
  execute() {
    print(description);
  }
};
