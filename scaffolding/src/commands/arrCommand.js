/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-03-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-03-2016
*/

var arrCommand = function () {
  var handle = function () {
    console.log('bury yar gold');
  };

  return {
    handle: handle
  }
};

module.exports = arrCommand;
