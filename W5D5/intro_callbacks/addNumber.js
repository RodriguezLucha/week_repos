const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft === 0){
    completionCallback(sum);
    reader.close(); 
    return;
  }
  reader.question('What number do you want to add   ', (answer) => {
    theInt = parseInt(answer);
    sum += theInt;
    numsLeft -= 1;
    console.log(`Partial sum: ${sum}.`);
    addNumbers(sum, numsLeft, completionCallback);
  });
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
