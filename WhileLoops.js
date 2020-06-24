/*
The while Loop
The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. 
Once the expression becomes false, the loop terminates.

The syntax of while loop in JavaScript is as follows −
while (expression) {
   Statement(s) to be executed if expression is true
}
*/
console.log();
console.log('-------------------------');
console.log('While Loops');
console.log('-------------------------');

var count = 0;
console.log("Starting Loop");

while (count < 10) {
    console.log("Current Count : " + count);
    count++;
}

console.log("Loop stopped!");
console.log();

/*
The do...while Loop
The do...while loop is similar to the while loop except that the condition check happens at the end of the loop. 
This means that the loop will always be executed at least once, even if the condition is false.

The syntax for do-while loop in JavaScript is as follows −
do {
   Statement(s) to be executed;
} while (expression);
*/
console.log();
console.log('-------------------------');
console.log('do...While Loops');
console.log('-------------------------');

var count = 0;

console.log("Starting Loop");
do {
    console.log("Current Count : " + count);
    count++;
} while (count < 5);

console.log("Loop stopped!");
console.log();