/*
JavaScript is an Object Oriented Programming (OOP) language. 
    A programming language can be called object-oriented if it provides four basic capabilities to developers −
        Encapsulation − the capability to store related information, whether data or methods, together in an object.
        Aggregation − the capability to store one object inside another object.
        Inheritance − the capability of a class to rely upon another class (or number of classes) for some of its properties and methods.
        Polymorphism − the capability to write one function or method that works in a variety of different ways.

    Objects are composed of attributes. If an attribute contains a function, it is considered to be a method of the object, 
    otherwise the attribute is considered a property. 

    Object Properties
    Object properties can be any of the three primitive data types, or any of the abstract data types, such as another object. 
    Object properties are usually variables that are used internally in the object's methods, but can also be globally visible 
    variables that are used throughout the page.

    Object Methods
    Methods are the functions that let the object do something or let something be done to it. 
    There is a small difference between a function and a method – at a function is a standalone unit of statements and a method is 
    attached to an object and can be referenced by the this keyword.
*/

/*
User-Defined Objects
All user-defined objects and built-in objects are descendants of an object called Object.
The new Operator
The new operator is used to create an instance of an object. To create an object, the new operator is followed by the constructor method.

In the following example, the constructor methods are Object(), Array(), and Date(). These constructors are built-in JavaScript functions. 
*/

var employee = new Object();
var books = new Array("C++", "Perl", "Java");
var day = new Date("August 15, 1947");

/*
The Object() Constructor
    A constructor is a function that creates and initializes an object. 
    JavaScript provides a special constructor function called Object() to build the object. 
    The return value of the Object() constructor is assigned to a variable.

    The variable contains a reference to the new object. 
    The properties assigned to the object are not variables and are not defined with the var keyword.
*/

var book = new Object(); // Create the object
book.subject = "Perl"; // Assign properties to the object
book.author = "Mohtashim";
document.write("Book name is : " + book.subject + "<br>");
document.write("Book author is : " + book.author + "<br>");

/*
This example demonstrates how to create an object with a User-Defined Function. 
Here this keyword is used to refer to the object that has been passed to a function.
*/
function book(title, author) {
    this.title = title;
    this.author = author;
}
var myBook = new book("Perl", "Mohtashim");
document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");

/*
Defining Methods for an Object
    The previous examples demonstrate how the constructor creates the object and assigns properties. 
    But we need to complete the definition of an object by assigning methods to it.
*/

function addPrice(amount) {
    this.price = amount;
}

function book(title, author) {
    this.title = title;
    this.author = author;
    this.addPrice = addPrice; // Assign that method as property.
}

var myBook = new book("Perl", "Mohtashim");
myBook.addPrice(100);

document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");
document.write("Book price is : " + myBook.price + "<br>");

/*
The 'with' Keyword
    The ‘with’ keyword is used as a kind of shorthand for referencing an object's properties or methods.
    The object specified as an argument to with becomes the default object for the duration of the block that follows. 
    The properties and methods for the object can be used without naming the object.

    The syntax for with object is as follows −
        with (object) {
            properties used without the object name and dot
        }
*/

function addPrice(amount) {
    with(this) {
        price = amount;
    }
}

function book(title, author) {
    this.title = title;
    this.author = author;
    this.price = 0;
    this.addPrice = addPrice; // Assign that method as property.
}

var myBook = new book("Perl", "Mohtashim");
myBook.addPrice(100);

document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");
document.write("Book price is : " + myBook.price + "<br>");

/*
JavaScript Native Objects
    JavaScript has several built-in or native objects. 
    These objects are accessible anywhere in your program and will work the same way in any browser running in any operating system.
    Here is the list of all important JavaScript Native Objects −
        JavaScript Number Object
        JavaScript Boolean Object
        JavaScript String Object
        JavaScript Array Object
        JavaScript Date Object
        JavaScript Math Object
        JavaScript RegExp Object
*/

/*
JavaScript Number Object
    The Number object represents numerical date, either integers or floating-point numbers. 
    In general, you do not need to worry about Number objects because the browser automatically converts number literals to instances 
    of the number class.
    The syntax for creating a number object is as follows −
        var val = new Number(number);

    In the place of number, if you provide any non-number argument, then the argument cannot be converted into a number, it returns NaN (Not-a-Number).
*/

/*
JavaScript Boolean Object
    The Boolean object represents two values, either "true" or "false". If value parameter is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false.

    Use the following syntax to create a boolean object.
        var val = new Boolean(value);
*/

/*
JavaScript String Object
    The String object lets you work with a series of characters; it wraps Javascript's string primitive data type with a number of helper
     methods.
    As JavaScript automatically converts between string primitives and String objects, you can call any of the helper methods of the 
     String object on a string primitive.
    Use the following syntax to create a String object −
        var val = new String(string);
*/

/*
JavaScript Array Object
    The Array object lets you store multiple values in a single variable. 
    It stores a fixed-size sequential collection of elements of the same type. 
    An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of 
    the same type.
    Use the following syntax to create an Array object −
        var fruits = new Array( "apple", "orange", "mango" );
        
    The Array parameter is a list of strings or integers. When you specify a single numeric parameter with the Array constructor, 
    you specify the initial length of the array. 
    The maximum length allowed for an array is 4,294,967,295.
    You can create array by simply assigning values as follows −
        var fruits = [ "apple", "orange", "mango" ];

    You will use ordinal numbers to access and to set values inside an array as follows.
        fruits[0] is the first element
        fruits[1] is the second element
        fruits[2] is the third element
*/

/*
JavaScript Date Object
    The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ) as shown below.
    Once a Date object is created, a number of methods allow you to operate on it. 
    Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, 
     using either local time or UTC (universal, or GMT) time.
    The ECMAScript standard requires the Date object to be able to represent any date and time, to millisecond precision, within 
     100 million days before or after 1/1/1970. This is a range of plus or minus 273,785 years, so JavaScript can represent date and 
     time till the year 27575
    You can use any of the following syntaxes to create a Date object using Date() constructor.
        new Date( )
        new Date(milliseconds)
        new Date(datestring)
        new Date(year,month,date[,hour,minute,second,millisecond ])
*/

/*
JavaScript Date Object
    The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ) as shown below.
    Once a Date object is created, a number of methods allow you to operate on it. 
    Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, 
     using either local time or UTC (universal, or GMT) time.
    The ECMAScript standard requires the Date object to be able to represent any date and time, to millisecond precision, within 
     100 million days before or after 1/1/1970. This is a range of plus or minus 273,785 years, so JavaScript can represent date and 
     time till the year 27575
    You can use any of the following syntaxes to create a Date object using Date() constructor.
        new Date( )
        new Date(milliseconds)
        new Date(datestring)
        new Date(year,month,date[,hour,minute,second,millisecond ])
*/

/*
JavaScript Math Object
    The math object provides you properties and methods for mathematical constants and functions. 
    Unlike other global objects, Math is not a constructor. 
    All the properties and methods of Math are static and can be called by using Math as an object without creating it.
    Thus, you refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the method's argument.
    The syntax to call the properties and methods of Math are as follows
        var pi_val = Math.PI;
        var sine_val = Math.sin(30);
*/

/*
JavaScript RegExp Object
    A regular expression is an object that describes a pattern of characters.
    The JavaScript RegExp class represents regular expressions, and both String and RegExp define methods that use regular expressions 
     to perform powerful pattern-matching and search-and-replace functions on text.
    A regular expression could be defined with the RegExp () constructor, as follows −
        var pattern = new RegExp(pattern, attributes);
        or simply
        var pattern = /pattern/attributes;

    Here is the description of the parameters −
        pattern − A string that specifies the pattern of the regular expression or another regular expression.
        attributes − An optional string containing any of the "g", "i", and "m" attributes that specify global, case-insensitive, 
        and multi-line matches, respectively.
*/