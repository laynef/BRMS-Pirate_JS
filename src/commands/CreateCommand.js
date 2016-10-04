/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-04-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-04-2016
*/

var recurv = require('recursive-copy');
var path = require('path');

var CreateCommand = function (name) {

  return {
    task: function () {
      var workingDirectory = process.cwd();
      if (name === null || name === '') {
        console.log('A name is required');
        throw new Error('pirate create Name');
      }

      console.log('Creating ' + name);

      var src = path.join(__dirname, '..', '..', 'project');
      var dest = path.join(workingDirectory, name);

      recurv(src, dest, {
        dot: true
      }, function(error, results) {
        if (error) {
          console.error('Creation failed: ' + error);
        } else {
          console.info('Creation succeeded');
        }
      });
    }
  }

};

module.exports = CreateCommand;
