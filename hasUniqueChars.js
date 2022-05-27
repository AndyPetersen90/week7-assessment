
function hasUniqueChars(word) {
  let uniqueChars = new Set([])
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i])
  }
  return uniqueChars.size === word.length
}
let word = 'steak'
console.log(hasUniqueChars(word))

const perf = require('execution-time')();

perf.start();                     // Starts timer
hasUniqueChars(word);
let resultsAppend = perf.stop();

console.log("append", resultsAppend.preciseWords);

//runtime is 144us
// time complexity O(n)
//space complexity is O(1)