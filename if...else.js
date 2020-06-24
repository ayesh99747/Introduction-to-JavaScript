/*
The if statement is the fundamental control statement that allows JavaScript to make decisions and execute statements conditionally.

The syntax for a basic if statement is as follows −
if (expression) {
   Statement(s) to be executed if expression is true
}
*/
console.log('-------------');
console.log('if example - ');
console.log('-------------');

var age = 20;

if (age > 18) {
    console.log("Qualifies for driving");
}

/*
The 'if...else' statement is the next form of control statement that allows JavaScript to execute statements in a more controlled way.

The syntax for a basic if statement is as follows −
if (expression) {
   Statement(s) to be executed if expression is true
} else {
   Statement(s) to be executed if expression is false
}
*/
console.log();
console.log('--------------------');
console.log('if...else example - ');
console.log('--------------------');

var age = 15;

if (age > 18) {
    console.log("Qualifies for driving");
} else {
    console.log("Does not qualify for driving");
}

/*
The if...else if... statement is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions.

The syntax for a basic if statement is as follows −
if (expression 1) {
   Statement(s) to be executed if expression 1 is true
} else if (expression 2) {
   Statement(s) to be executed if expression 2 is true
} else if (expression 3) {
   Statement(s) to be executed if expression 3 is true
} else {
   Statement(s) to be executed if no expression is true
}
*/
console.log();
console.log('-------------------------');
console.log('if...else...if example - ');
console.log('-------------------------');

var book = "maths";
if (book == "history") {
    console.log("History Book");
} else if (book == "maths") {
    console.log("Maths Book");
} else if (book == "economics") {
    console.log("Economics Book");
} else {
    console.log("Unknown Book");
}
console.log();