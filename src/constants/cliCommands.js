const COMMAND_MODULES = [
  require(`../commands/author`),
  require(`../commands/description`),
  require(`../commands/help`),
  require(`../commands/license`),
  require(`../commands/version`)
];

module.exports = COMMAND_MODULES;
