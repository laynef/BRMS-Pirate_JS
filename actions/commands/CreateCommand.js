/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-10-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');

var CreateCommand = function(name) {
  var newProject = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your project, it's not a choice");
      throw new Error('pirate create Name');
    }

    console.log("Raiding your project " + name);

    var src = path.join(__dirname, '..', '..', 'project', 'temp');
    var dest = path.join(workDir, name);

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Your rum is ready to go');
    });

  };
  return {
    handle: newProject
  }
};

module.exports = CreateCommand;
