
let array = [28, 43, -12, 30, 4, 0, 12]

function addToZero(array) {
  let value = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i] + array[j] === 0) {
          value = true;
          return value
        } 
      }
    }
  }
}
console.log(addToZero(array))

const perf = require('execution-time')();

perf.start();                     // Starts timer
addToZero(array);
let resultsAppend = perf.stop();

console.log("time", resultsAppend.preciseWords);

//runtime is 60us
// Time complexity O(n^2)
//space complexity is O(1)