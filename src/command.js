// Const
const COMMAND_MODULES = require(`./constants/cliCommands`);

// Utils
const {printError} = require(`./utils/print`);
const getCommandListMessage = require(`./utils/getCommandListMessage`);

const findCommandModule = (commandModules = []) => (commandName = ``) =>
  commandModules.find(({name}) => commandName === name);

const runCommand = (commandModules = []) => (commandName = ``) => {
  if (commandName === ``) {
    return null;
  }

  const formatedCommandName = commandName.slice(2);
  const commandModule = findCommandModule(commandModules)(formatedCommandName);

  if (commandModule === undefined) {
    const commandListMessage = getCommandListMessage();
    const message = `Такой команды нет ${commandName} , список команд:\n${commandListMessage}`;

    printError(message);
    process.exit(1);
  }

  return commandModule.execute();
};

module.exports = runCommand(COMMAND_MODULES);
