/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-10-2016
*/

var TextCommand = function() {
  var whatYoudSay = function() {
    console.log("bury yar gold");
  };

  return {
    handle: whatYoudSay
  }
}

module.exports = TextCommand;
