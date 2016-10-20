/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-20-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-20-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');

var DirectoryCommand = function(name) {

  var newDirectory = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your directory, it's not a choice");
      throw new Error('pirate mkdir Name');
    }

    console.log("Raiding your ship");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'client', 'app', name);
    var file = path.join(workDir, 'client', 'app', name, 'Component.jsx');
    var newFile = path.join(workDir, 'client', 'app', name, name + '.jsx');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Looting up your gold ...');

       fs.rename(file, newFile);

       console.log("Your gold is ready to go!");
    });

  };
  return {
    handle: newDirectory
  }
};

module.exports = DirectoryCommand;
