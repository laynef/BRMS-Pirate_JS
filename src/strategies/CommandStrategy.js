var PrintDocumentationCommand = require('../commands/PrintDocumentationCommand');
var ArrCommand = require('../commands/ArrCommand');
var CreateCommand = require('../commands/CreateCommand');

var CommandStrategy = function(commandPattern, args, flags) {
  var _commander = function(klass) {
    var command = new klass(...args);
    command.handle(flags);
  }

  var execute = function () {
    switch (commandPattern) {
      case 'arr':
        _commander(ArrCommand);
        break;
      case 'create':
        _commander(CreateCommand);
        break;
      default:
        _commander(PrintDocumentationCommand);
    }
  };

  return {
    execute: execute
  }
};

module.exports = CommandStrategy;
