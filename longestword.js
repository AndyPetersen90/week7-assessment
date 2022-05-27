
function longestStringForLoop(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}

let arr = ['boop', 'bloomburg', 'hello']
console.log(longestStringForLoop(arr));

const perf = require('execution-time')();

perf.start();                     // Starts timer
longestStringForLoop(arr);
let resultsAppend = perf.stop();

console.log("time", resultsAppend.preciseWords);

//estimated runtime is 65us
// time complexity O(n)
//space complexity is O(1)