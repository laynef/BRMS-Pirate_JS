/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-19-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 11-04-2016
*/

var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

var ComponentCommand = function(name) {

  var capitalName = name[0].toUpperCase() + name.slice(1).toLowerCase();

  var newComponent = function() {
    var workDir = process.cwd();
    if (name === undefined || name === '' || name === null) {
      console.log("Name your component, it's not a choice");
      throw new Error('pirate component Name');
    }

    console.log("Raiding your ship");

    var src = path.join(__dirname, '..', '..', 'project', 'component');
    var dest = path.join(workDir, 'client', 'app', 'components', name);
    var file = path.join(workDir, 'client', 'app', 'components', name, 'Component.jsx');
    var newFile = path.join(workDir, 'client', 'app', 'components', name, capitalName + '.jsx');

    // copy project to new directory
    ncp(src, dest, function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('Looting up your gold ...');

       fs.rename(file, newFile, function(e) {
         
       });

       // rename Main in Component.jsx
       fs.readFile(newFile, 'utf8', function (err,data) {

        var result = data.replace(/Main/g, capitalName);

        fs.writeFile(newFile, result, 'utf8', function (err) {
          // null
        });
      });

       console.log("Your gold is ready to go!");
    });

  };
  return {
    handle: newComponent
  }
};

module.exports = ComponentCommand;
