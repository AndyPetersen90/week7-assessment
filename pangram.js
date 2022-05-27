//Detect Pangram
function isPangram(string){
    // character set capturing group with negative lookahead
      let regex = /([a-z])(?!.*\1)/gi;
      return (string.match(regex)).length === 26;
}

let string = "The quick brown fox jumps over the lazy dog."
// let string = "Pack my box with five dozen liquor jugs."
// let string = "This is not a pangram."

console.log(isPangram(string));

const perf = require('execution-time')();

perf.start();                     // Starts timer
isPangram(string);
let resultsAppend = perf.stop();

console.log("time", resultsAppend.preciseWords);

//estimated runtime is 120us

//space complexity is O(1)