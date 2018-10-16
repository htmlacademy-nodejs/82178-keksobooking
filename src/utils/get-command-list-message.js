const CLI_COMMANDS = require(`../constants/cliCommands`);

const getCommandListMessage = (commandModules = CLI_COMMANDS) =>
  commandModules.reduce(
      (text, {name, description}) => `${text}\n--${name} - ${description}`,
      ``
  );

module.exports = getCommandListMessage;
