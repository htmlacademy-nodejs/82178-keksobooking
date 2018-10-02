// Data
const {version} = require(`../../package.json`);

// Utils
const {print} = require(`../utils/print`);

module.exports = {
  name: `version`,
  description: `Выводит версию приложения`,
  execute() {
    print(`v${version}`);
  }
};
