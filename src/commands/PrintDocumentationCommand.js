var pjson = require('../../package.json');

var PrintDocumentationCommand = function () {

  return {
    handle: function () {
      console.log('BRMS Pirate - Version ' + pjson.version);
      console.log('');
      console.log('├── create             ─ Create a new project');
      console.log('└── arr               ─ Verify that BRMS Pirate can arr');
    }
  }
};

module.exports = PrintDocumentationCommand;
