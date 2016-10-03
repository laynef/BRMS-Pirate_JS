/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-03-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-03-2016
*/

var ArrCommand = require('../commands/ArrCommand');
var CreateCommand = require('../commands/CreateCommand');
var MakeViewCommand = require('../commands/MakeViewCommand');
var MakeCommandCommand = require('../commands/MakeCommandCommand');
var MakeCollectionCommand = require('../commands/MakeCollectionCommand');
var MakeMeteorMethodCommand = require('../commands/MakeMeteorMethodCommand');
var AddMigrationPackageCommand = require('../commands/AddMigrationPackageCommand');
var MakeMigrationCommand = require('../commands/MakeMigrationCommand');
var AddMigrationRunnerCommand = require('../commands/AddMigrationRunnerCommand');
var PrintDocumentationCommand = require('../commands/PrintDocumentationCommand');
var ReactLoopReminder = require('../reminders/ReactLoopReminder');
var MeteorCallReminder = require('../reminders/MeteorCallReminder');
var MakeModelFactoryCommand = require('../commands/MakeModelFactoryCommand');
var MakeSeederCommand = require('../commands/MakeSeederCommand');
var AddSeederRunnerCommand = require('../commands/AddSeederRunnerCommand');
var SeedDatabaseCommand = require('../commands/SeedDatabaseCommand');

var CommandStrategy = function(commandPattern, args, flags) {
  var _commander = function(klass) {
    var command = new klass(...args);
    command.handle(flags);
  }

  var _reminder = function(klass) {
    var reminder = new klass();
    reminder.remindMe();
  }

  var execute = function () {
    switch (commandPattern) {
      case 'arr':
        _commander(ArrCommand);
        break;
      case 'db:seed':
        _commander(SeedDatabaseCommand);
        break;
      case 'create':
        _commander(CreateCommand);
        break;
      case 'make:view':
        _commander(MakeViewCommand);
        break;
      case 'make:command':
        _commander(MakeCommandCommand);
        break;
      case 'make:meteor-method':
        _commander(MakeMeteorMethodCommand);
        break;
      case 'make:collection':
        _commander(MakeCollectionCommand);
        break;
      case 'make:migration':
        _commander(AddMigrationPackageCommand);
        _commander(MakeMigrationCommand);
        _commander(AddMigrationRunnerCommand);
        break;
      case 'make:model-factory':
        _commander(MakeModelFactoryCommand);
        break;
      case 'make:seeder':
        _commander(MakeSeederCommand);
        _commander(AddSeederRunnerCommand);
        break;
      case 'remind-me:react-loop':
        _reminder(ReactLoopReminder);
        break;
      case 'remind-me:meteor-call':
        _reminder(MeteorCallReminder);
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
