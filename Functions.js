/*
Functions
    A function is a group of reusable code which can be called anywhere in your program. 
    This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. 
    Functions allow a programmer to divide a big program into a number of small and manageable functions.

    The basic syntax is shown here.

        function functionname(parameter-list) {
            statements
        }

*/

console.log();
console.log('-----------------------');
console.log('FUNCTION EXAMPLE 1');
console.log('-----------------------');

function sayHello1() {
    console.log("Hello there!");
}
sayHello1();
console.log();

/*
Function Parameters
    There is a facility to pass different parameters while calling a function. 
    These passed parameters can be captured inside the function and any manipulation can be done over those parameters. 
    A function can take multiple parameters separated by comma.
*/

console.log();
console.log('-----------------------');
console.log('FUNCTION EXAMPLE 2');
console.log('-----------------------');

function sayHello2(name, age) {
    console.log(name + " is " + age + " years old.");
}
sayHello2('Ayeshmantha', 19);
console.log();

/*
The return Statement
    A JavaScript function can have an optional return statement. 
    This is required if you want to return a value from a function. 
    This statement should be the last statement in a function.
*/

console.log();
console.log('-----------------------');
console.log('FUNCTION EXAMPLE 3');
console.log('-----------------------');

function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
}

function secondFunction() {
    var result;
    result = concatenate('Ayeshmantha', 'Wijegunathileke');
    console.log(result);
}

console.log(concatenate('Ayeshmantha', 'Wijegunathileke'));
secondFunction();
console.log();