const VERSION = 'v0.0.1';
const HELP = `
  Доступные команды:
  --help    — печатает этот текст;
  --version — печатает версию приложения;
`;
const PROJECT_NAME = `Keksobooking`;

const CLI_COMMANDS_MAP = new Map([
  ['--version', VERSION],
  ['--help', HELP]
]);

const compose = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

const print = text => console.log(text);
const printError = text => console.error(text);
const exitProgram = (codeError = 0) => process.exit(codeError);

const isValidCommand = (command) => CLI_COMMANDS_MAP.has(command);

const getCommandMessage = (command) => CLI_COMMANDS_MAP.get(command);
const getCommandErrorMessage = command => `
  Неизвестная команда ${command}.
  Чтобы прочитать правила использования приложения, наберите "--help"
`;
const getGreetingMessage = projectName => `
  Привет пользователь!
  Эта программа будет запускать сервер «${projectName}».
  Автор: Кекс.
`;

const printCommandMessage = command => {
  compose(getCommandMessage, print)(command);

  return 0;
};
const printCommandErrorMessage = command => {
  compose(getCommandErrorMessage, printError)(command);

  return 1;
};

const main = argv => {
  const command = argv[2];

  if (command !== void 0) {
    if (isValidCommand(command)) {
      compose(
        printCommandMessage,
        exitProgram
      )(command);
    }

    compose(
      printCommandErrorMessage,
      exitProgram
    )(command);
  }

  compose(
    getGreetingMessage,
    print,
    exitProgram
  )(PROJECT_NAME);
};

main(process.argv);
