/*
JavaScript Booleans
    A JavaScript Boolean represents one of two values: true or false.
*/

/*
Boolean Values
    Very often, in programming, you will need a data type that can only have one of two values, like
        YES / NO
        ON / OFF
        TRUE / FALSE
    For this, JavaScript has a Boolean data type. It can only take the values true or false.

*/

/*
The Boolean() Function
    You can use the Boolean() function to find out if an expression (or a variable) is true:
*/

console.log(Boolean(10 > 9)); // returns true

// Or even easier:
console.log(10 > 9); // also returns true

/*
Comparisons and Conditions
    Here are some examples:
        Operator	    Description	    Example
        ==	            equal to	    if (day == "Monday")
        >	            greater than	if (salary > 9000)
        <	            less than	    if (age < 18)
*/

/*
The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.
    Everything With a "Value" is True
*/
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(15));
console.log(Boolean("Hello"));
console.log(Boolean("false"));
console.log(Boolean(7 + 1 + 3.14));

/*
Everything Without a "Value" is False
The Boolean value of 0 (zero) is false:
*/
var x = 0;
console.log(Boolean(x)); // returns false

// The Boolean value of -0 (minus zero) is false:
var x = -0;
console.log(Boolean(x)); // returns false

// The Boolean value of "" (empty string) is false:
var x = "";
console.log(Boolean(x)); // returns false

// The Boolean value of undefined is false:
var x;
console.log(Boolean(x)); // returns false

// The Boolean value of null is false:
var x = null;
console.log(Boolean(x)); // returns false

// The Boolean value of false is (you guessed it) false:
var x = false;
console.log(Boolean(x)); // returns false

// The Boolean value of NaN is false:
var x = 10 / "H";
console.log(Boolean(x)); // returns false

/*
Booleans Can be Objects
Normally JavaScript booleans are primitive values created from literals:
*/
var x = false;
console.log(x);

// But booleans can also be defined as objects with the keyword new:
var y = new Boolean(false);
console.log(y);

var x = false;
var y = new Boolean(false);
console.log(typeof x); // typeof x returns boolean
console.log(typeof y); // typeof y returns object

/*
Do not create Boolean objects. It slows down execution speed.
The new keyword complicates the code. This can produce some unexpected results:

When using the == operator, equal booleans are equal:
*/
var x = false;
var y = new Boolean(false);
console.log(x == y);
// (x == y) is true because x and y have equal values

// When using the === operator, equal booleans are not equal, because the === operator expects equality in both type and value.
var x = false;
var y = new Boolean(false);
console.log(x === y);

// (x === y) is false because x and y have different types Or even worse. Objects cannot be compared:
var x = new Boolean(false);
var y = new Boolean(false);
console.log(x === y);

/*
(x == y) is false because objects cannot be compared
Note the difference between (x==y) and (x===y).
Comparing two JavaScript objects will always return false.
*/