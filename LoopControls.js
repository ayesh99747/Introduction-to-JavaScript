/*
JavaScript provides full control to handle loops and switch statements. 
There may be a situation when you need to come out of a loop without reaching its bottom. 
There may also be a situation when you want to skip a part of your code block and start the next iteration of the loop.

To handle all such situations, JavaScript provides break and continue statements. 
These statements are used to immediately come out of any loop or to start the next iteration of any loop respectively.
*/


/*
The break Statement
    The break statement, which was briefly introduced with the switch statement, is used to exit a loop early, 
    breaking out of the enclosing curly braces.
*/

console.log();
console.log('-----------------------');
console.log('BREAK STATEMENT EXAMPLE');
console.log('-----------------------');

var x = 1;
console.log("Entering the loop");

while (x < 20) {
    if (x == 5) {
        break; // breaks out of loop completely
    }
    x = x + 1;
    console.log(x);
}
console.log("Exiting the loop!");

console.log();

/*
The continue Statement
    The continue statement tells the interpreter to immediately start the next iteration of the loop and skip the 
      remaining code block. When a continue statement is encountered, the program flow moves to the loop check expression 
      immediately and if the condition remains true, then it starts the next iteration, otherwise the control comes out 
      of the loop.
*/

console.log();
console.log('-----------------------');
console.log('CONTINUE STATEMENT EXAMPLE');
console.log('-----------------------');

var x = 1;
console.log("Entering the loop");

while (x < 20) {
    x = x + 1;
    if (x == 5) {
        continue; // moves on to the next iteration
    }
    console.log(x);
}
console.log("Exiting the loop!");

console.log();

/*
Using Labels to Control the Flow
    Starting from JavaScript 1.2, a label can be used with break and continue to control the flow more precisely. 
    A label is simply an identifier followed by a colon (:) that is applied to a statement or a block of code. 
    We will see an example to understand how to use labels with break and continue.

    Note − Line breaks are not allowed between the ‘continue’ or ‘break’ statement and its label name. 
    Also, there should not be any other statement in between a label name and associated loop.
*/

console.log();
console.log('-----------------------');
console.log('LABELS EXAMPLE');
console.log('-----------------------');

console.log("Entering the loop!");
outerloop: // This is the label name         
    for (var i = 0; i < 5; i++) {
        console.log("Outerloop: " + i);
        innerloop:
            for (var j = 0; j < 5; j++) {
                if (j > 3) break; // Quit the innermost loop
                if (i == 2) break innerloop; // Do the same thing
                if (i == 4) break outerloop; // Quit the outer loop
                console.log("Innerloop: " + j);
            }
    }
console.log("Exiting the loop!");

console.log();