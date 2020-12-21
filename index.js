#!/usr/bin/env node

var cal = require("./calci");
// console.log(process.argv.length);
if (process.argv.length == 2) {
   console.log("usage: calci EXPRESSION");
   return;
}

// var input = process.argv[2];

for (var i = 2; i < process.argv.length; i++) {
   cal.calculate(process.argv[i]);
}
// cal.working();
// cal.calculate(input);

// console.log(input, typeof input);
