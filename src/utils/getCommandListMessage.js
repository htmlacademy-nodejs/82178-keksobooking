const CLI_COMMANDS = require(`../constants/cliCommands`);

module.exports = (commandModules = CLI_COMMANDS) =>
  commandModules.reduce(
      (text, {name, description}) => (
        `${text}\n--${name} - ${description}`
      ),
      ``
  );
