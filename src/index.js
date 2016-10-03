/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-03-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-03-2016
*/

#! /usr/bin/env node

var CommandStrategy = require('./strategies/CommandStrategy');

var userArgs = process.argv.slice(2);

// differentiate args from flags

var args = [];
var flags = [];

for (var i = 1; i < userArgs.length; i++) {
  if (userArgs[i].indexOf('--') === 0) {
    flags.push(userArgs[i]);
  } else {
    args.push(userArgs[i]);
  }
}

var commandStrategy = new CommandStrategy(userArgs[0], args, flags);

commandStrategy.execute();
