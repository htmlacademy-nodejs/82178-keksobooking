require(`colors`);

// Utils
const {print} = require(`../utils/print`);
const reduceMap = require(`../utils/reduce-map`);

module.exports = {
  name: `help`,
  description: `Выводит список доступных команд приложения`,
  execute() {
    const commandsMap = new Map([
      [`--author`, `Выводит автора.`],
      [`--description`, `Выводит описание.`],
      [`--license`, `Выводит тип лицензии.`],
      [`--version`, `Выводит версию.`],
      [`--help`, `Выводит справку.`]
    ]);

    const commandListMessage = reduceMap(
        commandsMap,
        (acc, description, command) =>
          `${acc}${`${command}`.grey} - ${`${description}`.green}\n`,
        ``
    );

    print(`Доступные команды:\n${commandListMessage}`);
  }
};
