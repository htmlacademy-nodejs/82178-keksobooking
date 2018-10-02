// Utils
const {print} = require(`../utils/print`);

module.exports = {
  name: `help`,
  description: `Выводит список доступных команд приложения`,
  execute() {
    print(`Доступные команды:
    --author      - выводит автора.
    --description - выводит описание.
    --license     - выводит тип лицензии.
    --version     - выводит версию.
    --help        - выводит справку.`
    );
  }
};
