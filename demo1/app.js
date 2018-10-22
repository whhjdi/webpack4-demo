//ES6
import sum from "./vendor/sum.js";
console.log('sum(1, 2)=' + sum(1, 2));
//CommonJS
var minus = require("./vendor/minus.js");
console.log('minus(2, 1)=' + minus(2, 1));
//AMD
require(["./vendor/multi.js"], function (multi) {
  console.log('multi(1, 2)=' + multi(1, 2));
});