const colors = require(`colors`);

// Data
const {version} = require(`../../package.json`);

// Utils
const {print} = require(`../utils/print`);

module.exports = {
  name: `version`,
  description: `Выводит версию приложения`,
  execute() {
    const [major, minor, patch] = version.split(`.`);
    const majorRed = `${major}`.red;
    const minorGreen = `${minor}`.green;
    const patchBlue = `${patch}`.blue;

    print(`v${majorRed}.${minorGreen}.${patchBlue}`);
  }
};
