// JavaScript has only one type of number. Numbers can be written with or without decimals.
var x = 3.14; // A number with decimals
var y = 3; // A number without decimals



// Extra large or extra small numbers can be written with scientific (exponent) notation:
var x = 123e5; // 12300000
var y = 123e-5; // 0.00123

/*
JavaScript Numbers are Always 64-bit Floating Point
    * Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, 
    floating-point etc.
    * JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 
    standard.
    * This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 
    to 62, and the sign in bit 63:
*/

/*
Precision
    Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
*/
var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999; // y will be 10000000000000000
console.log(x);
console.log(y);

// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1; // x will be 0.30000000000000004
console.log(x);

// To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3
console.log(x);

/*
Adding Numbers and Strings
    WARNING !!
        JavaScript uses the + operator for both addition and concatenation.
        Numbers are added. Strings are concatenated.
    If you add two numbers, the result will be a number:
*/
var x = 10;
var y = 20;
var z = x + y; // z will be 30 (a number)
console.log(z);

// If you add two strings, the result will be a string concatenation:
var x = "10";
var y = "20";
var z = x + y; // z will be 1020 (a string)
console.log(z);


// If you add a number and a string, the result will be a string concatenation:
var x = 10;
var y = "20";
var z = x + y; // z will be 1020 (a string)
console.log(z);

// A common mistake is to expect this result to be 30:
var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z);

/*
Numeric Strings
    JavaScript strings can have numeric content:
*/
var x = 100; // x is a number
var y = "100"; // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
var z = x / y; // z will be 10
console.log(z);

// This will also work:
var x = "100";
var y = "10";
var z = x * y; // z will be 1000
console.log(z);

// And this will work:
var x = "100";
var y = "10";
var z = x - y; // z will be 90
console.log(z);

// But this will not work:
var x = "100";
var y = "10";
var z = x + y; // z will not be 110 (It will be 10010)
console.log(z);

/*
NaN - Not a Number
    NaN is a JavaScript reserved word indicating that a number is not a legal number.
    Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/
var x = 100 / "Apple"; // x will be NaN (Not a Number)


// However, if the string contains a numeric value , the result will be a number:
var x = 100 / "10"; // x will be 10


// You can use the global JavaScript function isNaN() to find out if a value is a number:
var x = 100 / "Apple";
console.log(isNaN(x)); // returns true because x is Not a Number


// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
var x = NaN;
var y = 5;
var z = x + y; // z will be NaN
console.log(z);

// Or the result might be a concatenation:
var x = NaN;
var y = "5";
var z = x + y; // z will be NaN5
console.log(z);

// NaN is a number: typeof NaN returns number:
typeof NaN; // returns "number"
console.log(typeof(NaN));


/*
Infinity
    Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
*/
var myNumber = 2;
while (myNumber != Infinity) { // Execute until Infinity
    myNumber = myNumber * myNumber;
}
console.log(myNumber);

// Division by 0 (zero) also generates Infinity:
var x = 2 / 0; // x will be Infinity
var y = -2 / 0; // y will be -Infinity
console.log(x);
console.log(y);


// Infinity is a number: typeof Infinity returns number.
typeof Infinity; // returns "number"
console.log(typeof(Infinity));

/*
Hexadecimal
    JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
*/
var x = 0xFF; // x will be 255

/*
    By default, JavaScript displays numbers as base 10 decimals.
    But you can use the toString() method to output numbers from base 2 to base 36.
    Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
*/
var myNumber = 32;
console.log(myNumber.toString(10)); // returns 32
console.log(myNumber.toString(32)); // returns 10
console.log(myNumber.toString(16)); // returns 20
console.log(myNumber.toString(8)); // returns 40
console.log(myNumber.toString(2)); // returns 100000

/*
Numbers Can be Objects
Normally JavaScript numbers are primitive values created from literals:
    var x = 123;
But numbers can also be defined as objects with the keyword new:
    var y = new Number(123);
*/
var x = 123;
var y = new Number(123);
console.log(typeof(x)); // typeof x returns number
console.log(typeof(x)); // typeof y returns object


// When using the == operator, equal numbers are equal:
var x = 500;
var y = new Number(500);
console.log((x == y)); // (x == y) is true because x and y have equal values


// When using the === operator, equal numbers are not equal, because the === operator expects equality in both type and value.
var x = 500;
var y = new Number(500);
console.log((x === y)); // (x === y) is false because x and y have different types


// Or even worse.Objects cannot be compared:
var x = new Number(500);
var y = new Number(500);
console.log((x == y)); // (x == y) is false because objects cannot be compared



// JAVASCRIPT NUMBER METHODS

/*
Number Methods and Properties
    Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).
    But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive 
    values as objects when executing methods and properties.
*/


/*
The toString() Method
    The toString() method returns a number as a string.
    All number methods can be used on any type of numbers (literals, variables, or expressions):
*/
var x = 123;
console.log(x.toString()); // returns 123 from variable x
console.log((123).toString()); // returns 123 from literal 123
console.log((100 + 23).toString()); // returns 123 from expression 100 + 23

/*
The toExponential() Method
    toExponential() returns a string, with a number rounded and written using exponential notation.
    A parameter defines the number of characters behind the decimal point:
*/
var x = 9.656;
console.log(x.toExponential(2)); // returns 9.66e+0
console.log(x.toExponential(4)); // returns 9.6560e+0
console.log(x.toExponential(6)); // returns 9.656000e+0


/*
The toFixed() Method
    toFixed() returns a string, with the number written with a specified number of decimals:
*/
var x = 9.656;

console.log(x.toFixed(0)); // returns 10
console.log(x.toFixed(2)); // returns 9.66
console.log(x.toFixed(4)); // returns 9.6560
console.log(x.toFixed(6)); // returns 9.656000


// NOTE : toFixed(2) is perfect for working with money.


/*
The toPrecision() Method
    toPrecision() returns a string, with a number written with a specified length:
*/
var x = 9.656;
console.log(x.toPrecision()); // returns 9.656
console.log(x.toPrecision(2)); // returns 9.7
console.log(x.toPrecision(4)); // returns 9.656
console.log(x.toPrecision(6)); // returns 9.65600

/*
The valueOf() Method
    valueOf() returns a number as a number.
*/
var x = 123;
console.log(x.valueOf()); // returns 123 from variable x
console.log((123).valueOf()); // returns 123 from literal 123
console.log((100 + 23).valueOf()); // returns 123 from expression 100 + 23

/*
    In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
    The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
    There is no reason to use it in your code.
    All JavaScript data types have a valueOf() and a toString() method.
*/

/*
Converting Variables to Numbers
    There are 3 JavaScript methods that can be used to convert variables to numbers:
        The Number() method
        The parseInt() method
        The parseFloat() method

    These methods are not number methods, but global JavaScript methods.


*/

/*
Global JavaScript Methods
    JavaScript global methods can be used on all JavaScript data types.
    These are the most relevant methods, when working with numbers:
    Method	            Description
    Number()	        Returns a number, converted from its argument.
    parseFloat()	    Parses its argument and returns a floating point number
    parseInt()	        Parses its argument and returns an integer
*/

/*
The Number() Method
    Number() can be used to convert JavaScript variables to numbers:
*/
Number(true); // returns 1
Number(false); // returns 0
Number("10"); // returns 10
Number("  10"); // returns 10
Number("10  "); // returns 10
Number(" 10  "); // returns 10
Number("10.33"); // returns 10.33
Number("10,33"); // returns NaN
Number("10 33"); // returns NaN
Number("John"); // returns NaN
// If the number cannot be converted, NaN (Not a Number) is returned.

/*
The Number() Method Used on Dates
    Number() can also convert a date to a number:
*/
Number(new Date("2017-09-30")); // returns 1506729600000
// The Number() method above returns the number of milliseconds since 1.1.1970.

/*
The parseInt() Method
    parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:


*/
parseInt("10"); // returns 10
parseInt("10.33"); // returns 10
parseInt("10 20 30"); // returns 10
parseInt("10 years"); // returns 10
parseInt("years 10"); // returns NaN
// If the number cannot be converted, NaN (Not a Number) is returned.


/*
The parseFloat() Method
    parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
*/
parseFloat("10"); // returns 10
parseFloat("10.33"); // returns 10.33
parseFloat("10 20 30"); // returns 10
parseFloat("10 years"); // returns 10
parseFloat("years 10"); // returns NaN
// If the number cannot be converted, NaN(Not a Number) is returned.


/*
Number Properties

Property	            Description
MAX_VALUE	            Returns the largest number possible in JavaScript
MIN_VALUE	            Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	    Represents infinity (returned on overflow)
NEGATIVE_INFINITY	    Represents negative infinity (returned on overflow)
NaN	                    Represents a "Not-a-Number" value
*/


/*
JavaScript MIN_VALUE and MAX_VALUE
    MAX_VALUE returns the largest possible number in JavaScript.
*/
var x = Number.MAX_VALUE;
console.log(x);

// MIN_VALUE returns the lowest possible number in JavaScript.
var x = Number.MIN_VALUE;
console.log(x);

//JavaScript POSITIVE_INFINITY
var x = Number.POSITIVE_INFINITY;
console.log(x);

// POSITIVE_INFINITY is returned on overflow:
var x = 1 / 0;
console.log(x);

// JavaScript NEGATIVE_INFINITY
var x = Number.NEGATIVE_INFINITY;
console.log(x);

// NEGATIVE_INFINITY is returned on overflow:
var x = -1 / 0;
console.log(x);


// JavaScript NaN - Not a Number
var x = Number.NaN;
console.log(x);

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non - numeric string will result in NaN(Not a Number):
var x = 100 / "Apple"; // x will be NaN (Not a Number)
console.log(x);


/*
Number Properties Cannot be Used on Variables
    Number properties belongs to the JavaScript 's number object wrapper called Number.
    These properties can only be accessed as Number.MAX_VALUE.
    Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:
*/
var x = 6;
var y = x.MAX_VALUE; // y becomes undefined
console.log(y);