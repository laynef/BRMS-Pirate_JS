/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-19-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-19-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');

var ComponentCommand = function(name) {

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your component, it's not a choice");
      throw new Error('pirate component Name');
    }

    console.log("Raiding your ship");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'client', 'app', 'components', name);

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Looting up your gold ...');
       console.log("Your gold is ready to go!");
    });

  };
  return {
    handle: newComponent
  }
};

module.exports = ComponentCommand;
