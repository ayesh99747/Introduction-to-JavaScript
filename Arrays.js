// JavaScript Arrays
// JavaScript arrays are used to store multiple values in a single variable.
var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

/*
What is an Array?
    An array is a special variable, which can hold more than one value at a time.
    If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
*/
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";

/*However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.
*/

/*
Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.
Syntax:
    var array_name = [item1, item2, ...];  
*/
var cars = ["Saab", "Volvo", "BMW"];

//Spaces and line breaks are not important. A declaration can span multiple lines:
var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

/*
Using the JavaScript Keyword new
    The following example also creates an Array, and assigns values to it:
*/
var cars = new Array("Saab", "Volvo", "BMW");

/*
The two examples above do exactly the same. There is no need to use new Array().
For simplicity, readability and execution speed, use the first one (the array literal method).
*/

/*
Access the Elements of an Array
You access an array element by referring to the index number.
This statement accesses the value of the first element in cars:
    var name = cars[0];
*/
var cars = ["Saab", "Volvo", "BMW"];

// NOTE: Array indexes start with 0.

/*
Changing an Array Element
    This statement changes the value of the first element in cars:
    cars[0] = "Opel";
*/
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars);
/*
Access the Full Array
    With JavaScript, the full array can be accessed by referring to the array name:
*/
var cars = ["Saab", "Volvo", "BMW"];

/*
Arrays are Objects
    Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
    But, JavaScript arrays are best described as arrays.
    Arrays use numbers to access its "elements". In this example, person[0] returns John:
    Array:
        var person = ["John", "Doe", 46];
    Objects use names to access its "members". In this example, person.firstName returns John:
    Object:
        var person = {firstName:"John", lastName:"Doe", age:46};
*/

/*
Array Elements Can Be Objects
    JavaScript variables can be objects.Arrays are special kinds of objects.
    Because of this, you can have variables of different types in the same Array.
    You can have objects in an Array.You can have functions in an Array.You can have arrays in an Array:
*/
var myArray = ["abc", "def", "ghi"];
var myCars = ["Saab", "Volvo", "BMW"];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
console.log(myArray);

/*
Array Properties and Methods
    The real strength of JavaScript arrays are the built-in array properties and methods:
*/
var x = cars.length; // The length property returns the number of elements
var y = cars.sort(); // The sort() method sorts arrays
console.log(x);
console.log(y);
/*
The length Property
    The length property of an array returns the length of an array (the number of array elements).
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length; // the length of fruits is 4
//The length property is always one more than the highest array index.


// Accessing the First Array Element
fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
console.log(first);

// Accessing the Last Array Element
fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];
console.log(last);

/*
Looping Array Elements
    The safest way to loop through an array, is using a for loop:
*/
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
console.log("Printing fruits - ");
for (i = 0; i < fLen; i++) {
    console.log(fruits[i]);
}

// You can also use the Array.forEach() function:
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(myFunction);
console.log("Printing fruits - ");

function myFunction(value) {
    console.log(value);
}

/*
Adding Array Elements
    The easiest way to add a new element to an array is using the push() method:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon"); // adds a new element (Lemon) to fruits
console.log(fruits);

//New element can also be added to an array using the length property:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon"; // adds a new element (Lemon) to fruits
console.log(fruits);
/*
WARNING !
Adding elements with high indexes can create undefined "holes" in an array:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon"; // adds a new element (Lemon) to fruits
console.log(fruits);

/*
Associative Arrays
    Many programming languages support arrays with named indexes.
    Arrays with named indexes are called associative arrays (or hashes).
    JavaScript does not support arrays with named indexes.
    In JavaScript, arrays always use numbered indexes.  
*/
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x = person.length; // person.length will return 3
var y = person[0]; // person[0] will return "John"
console.log(x);
console.log(y);

/*
WARNING !!
If you use named indexes, JavaScript will redefine the array to a standard object.
After that, some array methods and properties will produce incorrect results.
*/
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length; // person.length will return 0
var y = person[0]; // person[0] will return undefined
console.log(x);
console.log(y);

/*
The Difference Between Arrays and Objects
    In JavaScript, arrays use numbered indexes.  
    In JavaScript, objects use named indexes.
    Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.
    * JavaScript does not support associative arrays.
    * You should use objects when you want the element names to be strings (text).
    * You should use arrays when you want the element names to be numbers.
*/

/*
Avoid new Array()
    There is no need to use the JavaScript's built-in array constructor new Array().
    Use [] instead.
    These two different statements both create a new empty array named points:
*/
var points = new Array(); // Bad
var points = []; // Good 


// These two different statements both create a new array containing 6 numbers:
var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10]; // Good

// The new keyword only complicates the code. It can also produce some unexpected results:
var points = new Array(40, 100); // Creates an array with two elements (40 and 100)
console.log(points);

// What if I remove one of the elements?
var points = new Array(40); // Creates an array with 40 undefined elements !!!!!
console.log(points);

/*
How to Recognize an Array
    A common question is: How do I know if a variable is an array?
    The problem is that the JavaScript operator typeof returns "object":
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits; // returns object
console.log(typeof(fruits));

// The typeof operator returns object because a JavaScript array is an object.

/*
Solution 1:
    To solve this problem ECMAScript 5 defines a new method Array.isArray():
*/

console.log(Array.isArray(fruits)); // returns true
// The problem with this solution is that ECMAScript 5 is not supported in older browsers.

/*
Solution 2:
    To solve this problem you can create your own isArray() function:
*/
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
// The function above always returns true if the argument is an array.
// Or more precisely: it returns true if the object prototype contains the word "Array".

/*
Solution 3:
    The instanceof operator returns true if an object is created by a given constructor:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits instanceof Array); // returns true


// JavaScript Array Methods
/*
Converting Arrays to Strings
    The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

/*
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

/*
Popping and Pushing
    When you work with arrays, it is easy to remove elements and add new elements.
    This is what popping and pushing is:
    Popping items out of an array, or pushing items into an array.
*/

/*
Popping
    The pop() method removes the last element from an array:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // Removes the last element ("Mango") from fruits
console.log(fruits);

// The pop() method returns the value that was "popped out":
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop(); // the value of x is "Mango"
console.log(x);

/*
Pushing
    The push() method adds a new element to an array (at the end):
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
console.log(fruits);

// The push() method returns the new array length:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi"); //  the value of x is 5
console.log(x);

/*
Shifting Elements
    Shifting is equivalent to popping, working on the first element instead of the last.
    The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); // Removes the first element "Banana" from fruits
console.log(fruits);

// The shift() method returns the string that was "shifted out":
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift(); // the value of x is "Banana"
console.log(fruits);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits
console.log(fruits);

// The unshift() method returns the new array length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Returns 5
console.log(fruits);

/*
Changing Elements
    Array elements are accessed using their index number:
    Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"; // Changes the first element of fruits to "Kiwi"
console.log(fruits);

// The length property provides an easy way to append a new element to an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; // Appends "Kiwi" to fruits
console.log(fruits);

/*
Deleting Elements
    Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // Changes the first element in fruits to undefined
console.log(fruits);

// Using delete may leave undefined holes in the array. Use pop() or shift() instead.

/*
Splicing an Array
    The splice() method can be used to add new items to an array:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

/*
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

// The splice() method returns an array with the deleted items:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

/*
Using splice() to Remove Elements
    With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Removes the first element of fruits
console.log(fruits);

/*
The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.
*/

/*
Merging (Concatenating) Arrays
    The concat() method creates a new array by merging (concatenating) existing arrays:
*/
// Example (Merging Two Arrays)
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys
console.log(myChildren);
/*
The concat() method does not change the existing arrays. It always returns a new array.
The concat() method can take any number of array arguments:
*/
// Example (Merging Three Arrays)
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
console.log(myChildren);

// The concat() method can also take strings as arguments:
// Example (Merging an Array with Values)
var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter");
console.log(myChildren);

/*
Slicing an Array
    The slice() method slices out a piece of an array into a new array.
    This example slices out a part of an array starting from array element 1 ("Orange"):
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
console.log(fruits);

/*
The slice() method creates a new array. It does not remove any elements from the source array.
This example slices out a part of an array starting from array element 3 ("Apple"):
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);

/*
The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to (but not including) the end argument.
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
console.log(citrus);
/*
Automatic toString()
    JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
    This is always the case when you try to output an array.
    These two examples will produce the same result:
*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString());
// All JavaScript objects have a toString() method.