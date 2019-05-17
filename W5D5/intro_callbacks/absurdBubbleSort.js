const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} greater than ${el2} ?`, (answer) => {
    if (answer == 'yes') {
      callback(true); 
    }
    else {
      callback(false); 
    }
  });
 
}
// askIfGreaterThan(3, 2, function(value) {console.log(value)})


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  console.log(arr, i, madeAnySwaps)
  if (i == (arr.length - 1)) {
    // console.log(i);
    outerBubbleSortLoop(madeAnySwaps);
    // return;
  }
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreatThan) {
      if (isGreatThan) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  debugger;
  function outerBubbleSortLoop(madeAnySwaps) {
    
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if(madeAnySwaps){
      console.log('1');
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr);
    }

  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([2, 3, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});