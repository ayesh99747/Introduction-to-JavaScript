// A JavaScript string is zero or more characters written inside quotes. Example - 
var x = "John Doe";


// You can use single or double quotes:
var carName1 = "Volvo XC60"; // Double quotes
var carName2 = 'Volvo XC60'; // Single quotes


// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';



/* Escape Character
The backslash(\) escape character turns special characters into string characters:

    Code        Result      Description
    \ '	        '           Single quote
    \ "	        "           Double quote
    \\          \           Backslash
*/

// The sequence \"  inserts a double quote in a string:
var x = "We are the so-called \"Vikings\" from the north.";

// The sequence \'  inserts a single quote in a string:
var x = 'It\'s alright.';

// The sequence \\  inserts a backslash in a string:
var x = "The character \\ is called backslash.";



/* 
Strings Can be Objects
Normally, JavaScript strings are primitive values, created from literals:
    var firstName = "John";
But strings can also be defined as objects with the keyword new:
    var firstName = new String("John");
*/
var x = "John"; // typeof x will return string
var y = new String("John"); // typeof y will return object



// When using the == operator, equal strings are equal:
// (x == y) is true because x and y have equal values
var x = "John";
var y = new String("John");



// When using the === operator, equal strings are not equal, because the === operator expects equality in both type and value.
// (x === y) is false because x and y have different types (string and object)
var x = "John";
var y = new String("John");



// Or even worse. Objects cannot be compared:
// (x == y) is false because x and y are different objects
// also (x === y) is false because x and y are different objects
var x = new String("John");
var y = new String("John");



//STRING METHODS
// To find the length of a string, use the built-in length property:
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);


// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);


// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

// NOTE - 
// Both indexOf(), and lastIndexOf() return -1 if the text is not found.
// Both methods accept a second parameter as the starting position for the search:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
console.log(pos);
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, 
// the search starts at position 15, and searches to the beginning of the string.
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
console.log(pos);


// The search() method searches a string for a specified value and returns the position of the match:
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);


/*
The slice() Method
    slice() extracts a part of a string and returns the extracted part in a new string.
    The method takes 2 parameters: the start position, and the end position (end not included).
    This example slices out a portion of a string from position 7 to position 12 (13-1):
*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

/*
    If a parameter is negative, the position is counted from the end of the string.
    This example slices out a portion of a string from position -12 to position -6:
*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);

// If you omit the second parameter, the method will slice out the rest of the string:
var res = str.slice(7);
console.log(res);

// or, counting from the end:
var res = str.slice(-12);
console.log(res);

/*
The substring() Method
    substring() is similar to slice().
    The difference is that substring() cannot accept negative indexes.
    If you omit the second parameter, substring() will slice out the rest of the string.
*/
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);

/*
The substr() Method
    substr() is similar to slice().
    The difference is that the second parameter specifies the length of the extracted part.
   
*/
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);

//  If you omit the second parameter, substr() will slice out the rest of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
console.log(res);

// If the first parameter is negative, the position counts from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
console.log(res);

/*
Replacing String Content
    The replace() method replaces a specified value with another value in a string:
*/
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

// By default, the replace() method replaces only the first match:
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");
console.log(n);

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
console.log(n);

// To replace all matches, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);

/*
Converting to Upper and Lower Case
    A string is converted to upper case with toUpperCase():
*/
var text1 = "Hello World!"; // String
var text2 = text1.toUpperCase(); // text2 is text1 converted to upper
console.log(text2);

// A string is converted to lower case with toLowerCase():
var text1 = "Hello World!"; // String
var text2 = text1.toLowerCase(); // text2 is text1 converted to lower
console.log(text2);


/*
The concat() Method
    concat() joins two or more strings:
*/
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

// The concat() method can be used instead of the plus operator.These two lines do the same:
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

/*
String.trim()
    The trim() method removes whitespace from both sides of a string:
*/
var str = "       Hello World!        ";
console.log(str.trim());

/*
The trim() method is not supported in Internet Explorer 8 or lower.
If you need to support IE 8, you can use replace() with a regular expression instead:
*/
var str = "       Hello World!        ";
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// You can also use the replace solution above to add a trim function to the JavaScript String.prototype:
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}
var str = "       Hello World!        ";
console.log(str.trim());

/*
Extracting String Characters
There are 3 methods for extracting string characters:
    * charAt(position)
    * charCodeAt(position)
    * Property access[]
*/
/*
The charAt() Method
    The charAt() method returns the character at a specified index(position) in a string
*/
var str = "HELLO WORLD";
console.log(str.charAt(0)); // returns H

/*
The charCodeAt() Method
    The charCodeAt() method returns the unicode of the character at a specified index in a string:
    The method returns a UTF-16 code (an integer between 0 and 65535).
*/
var str = "HELLO WORLD";
console.log(str.charCodeAt(0)); // returns 72

/*
Property Access
    ECMAScript 5 (2009) allows property access [ ] on strings:
*/
var str = "HELLO WORLD";
console.log(str[0]); // returns H

/*
Converting a String to an Array
    A string can be converted to an array with the split() method:
*/
var txt = "a,b,c,d,e"; // String
txt.split(","); // Split on commas
txt.split(" "); // Split on spaces
txt.split("|"); // Split on pipe

/*
    If the separator is omitted, the returned array will contain the whole string in index [0].
    If the separator is "", the returned array will be an array of single characters:
*/
var txt = "Hello"; // String
txt.split(""); // Split in characters