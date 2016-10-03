/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-03-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-03-2016
*/

var pjson = require('../../package.json');

var PrintDocumentationCommand = function () {
  var handle = function () {
    console.log('BRMS - Version ' + pjson.version);
    console.log('');
    console.log('├── create             ─ Create a new project');
    console.log('├── db');
    console.log('|    └── seed          ─ Seed the database using your seeders');
    console.log('├── make');
    console.log('|    ├── command       ─ Create a dispatchable command');
    console.log('|    ├── collection    ─ Create a collection (only supports Mongo)');
    console.log('|    ├── meteor-method ─ Create a Meteor method');
    console.log('|    ├── model-factory ─ Create a model factory for the given collection');
    console.log('|    ├── migration     ─ Create a migration (uses percolate:migrations)');
    console.log('|    ├── seeder        ─ Create a seed from the model-factory of a given collection');
    console.log('|    └── view          ─ Create a view module');
    console.log('├── remind-me');
    console.log('|    ├── meteor-call   ─ Reminds you how to call a meteor method');
    console.log('|    └── react-loop    ─ Reminds you how to achieve dynamic children in React');
    console.log('└── arr               ─ Verify that BRMS can arr');
  };

  return {
    handle: handle
  }
};

module.exports = PrintDocumentationCommand;
