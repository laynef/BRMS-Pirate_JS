/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-10-2016
*/

var actionJson = require('../../package.json');

var PrintDoc = function() {
  var printMe = function() {
    console.log("_______________  ___ _____  ______ _           _        ");
    console.log("| ___ \\ ___ \\  \\/  |/  ___| | ___ (_)         | |       ");
    console.log("| |_/ / |_/ / .  . |\\ `--.  | |_/ /_ _ __ __ _| |_ ___  ");
    console.log("| ___ \\    /| |\\/| | `--. \\ |  __/| | '__/ _` | __/ _ \\ ");
    console.log("| |_/ / |\\ \\| |  | |/\\__/ / | |   | | | | (_| | ||  __/ ");
    console.log("\\____/\\_| \\_\\_|  |_/\\____/  \\_|   |_|_|  \\__,_|\\__\\___| ");
    console.log("\n");
    console.log("BRMS-Pirate_JS - Version" + actionJson.version);
    console.log('├── create             ─ Create a new project');
    console.log('└── arr                ─ Verify that your crew can arr');
  };
  return {
    handle : printMe
  }
};

module.exports = PrintDoc;
