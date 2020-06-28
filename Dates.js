/*
JavaScript Date Objects
    JavaScript Date Object lets us work with dates:
*/
var d = new Date();
console.log(d);

/*
JavaScript Date Output
    By default, JavaScript will use the browser's time zone and display a date as a full text string:
    You will learn much more about how to display dates, later in this tutorial.
*/

/*
Creating Date Objects
    Date objects are created with the new Date() constructor.
    There are 4 ways to create a new date object:
        new Date()
        new Date(year, month, day, hours, minutes, seconds, milliseconds)
        new Date(milliseconds)
        new Date(date string)
*/


/*
new Date()
    new Date() creates a new date object with the current date and time:
*/
var d = new Date();
console.log(d);

// Date objects are static. The computer time is ticking, but date objects are not.

/*
new Date(year, month, ...)
    new Date(year, month, ...) creates a new date object with a specified date and time.
    7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
*/
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);

// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.


// 6 numbers specify year, month, day, hour, minute, second:
var d = new Date(2018, 11, 24, 10, 33, 30);
console.log(d);

// 5 numbers specify year, month, day, hour, and minute:
var d = new Date(2018, 11, 24, 10, 33);
console.log(d);

// 4 numbers specify year, month, day, and hour:
var d = new Date(2018, 11, 24, 10);
console.log(d);

// 3 numbers specify year, month, and day:
var d = new Date(2018, 11, 24);
console.log(d);

// 2 numbers specify year and month:
var d = new Date(2018, 11);
console.log(d);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
var d = new Date(2018);
console.log(d);

/*
Previous Century
    One and two digit years will be interpreted as 19xx:
*/
var d = new Date(99, 11, 24);
console.log(d);

var d = new Date(9, 11, 24);
console.log(d);

/*
new Date(dateString)
    new Date(dateString) creates a new date object from a date string:
*/
var d = new Date("October 13, 2014 11:13:00");
console.log(d);

/*
JavaScript Stores Dates as Milliseconds
    JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
    Zero time is January 01, 1970 00:00:00 UTC.
    Now the time is: 1593346967245 milliseconds past January 01, 1970
*/

/*
new Date(milliseconds)
    new Date(milliseconds) creates a new date object as zero time plus milliseconds:
*/
var d = new Date(0);
console.log(d);

// 01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
var d = new Date(100000000000);
console.log(d);

// January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966:
var d = new Date(-100000000000);
console.log(d);

var d = new Date(86400000);
console.log(d);
// One day (24 hours) is 86 400 000 milliseconds.

/*
Date Methods
    When a Date object is created, a number of methods allow you to operate on it.
    Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.
    Date methods and time zones are covered in the next chapters.
*/

/*
Displaying Dates
    JavaScript will (by default) output dates in full text string format:
    When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
*/
d = new Date();
console.log(d);

// Same as:
d = new Date();
console.log(d.toString());


//The toUTCString() method converts a date to a UTC string (a date display standard).
var d = new Date();
console.log(d.toUTCString());

// The toDateString() method converts a date to a more readable format:
var d = new Date();
console.log(d.toDateString());

/*
JavaScript Date Formats
JavaScript Date Input
    There are generally 3 types of JavaScript date input formats:

    Type	        Example
    ISO Date	    "2015-03-25" (The International Standard)
    Short Date	    "03/25/2015"
    Long Date	    "Mar 25 2015" or "25 Mar 2015"

    The ISO format follows a strict standard in JavaScript.
    The other formats are not so well defined and might be browser specific.
*/


/*
JavaScript Date Output
    Independent of input format, JavaScript will (by default) output dates in full text string format.
        
        Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time)
*/


/*
JavaScript ISO Dates
    ISO 8601 is the international standard for the representation of dates and times.
    The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
    Example (Complete date)
*/
var d = new Date("2015-03-25");
console.log(d);


/*
The computed date will be relative to your time zone.
Depending on your time zone, the result above will vary between March 24 and March 25.

ISO Dates (Year and Month)
    ISO dates can be written without specifying the day (YYYY-MM):
*/
var d = new Date("2015-03");
console.log(d);

/*
Time zones will vary the result above between February 28 and March 01.

ISO Dates (Only Year)
    ISO dates can be written without month and day (YYYY):
*/
var d = new Date("2015");
console.log(d);

/*
Time zones will vary the result above between December 31 2014 and January 01 2015.

ISO Dates (Date-Time)
    ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
*/
var d = new Date("2015-03-25T12:00:00Z");
console.log(d);

/*
Date and time is separated with a capital T.
UTC time is defined with a capital letter Z.
If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
*/
var d = new Date("2015-03-25T12:00:00-06:30");
console.log(d);

/*
UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
Omitting T or Z in a date-time string can give different results in different browsers.

Time Zones
    When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
    When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
    In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to 
    CDT (Central US Daylight Time) if a user browses from central US.
*/


/*
JavaScript Short Dates.
    Short dates are written with an "MM/DD/YYYY" syntax like this:
*/
var d = new Date("03/25/2015");
console.log(d);

/*
WARNINGS !
In some browsers, months or days with no leading zeroes may produce an error:
*/
var d = new Date("2015-3-25");
console.log(d);

/*
The behavior of "YYYY/MM/DD" is undefined.
Some browsers will try to guess the format. Some will return NaN.
*/
var d = new Date("2015/03/25");
console.log(d);

/*
The behavior of  "DD-MM-YYYY" is also undefined.
Some browsers will try to guess the format. Some will return NaN.
*/
var d = new Date("25-03-2015");
console.log(d);

/*
JavaScript Long Dates.
    Long dates are most often written with a "MMM DD YYYY" syntax like this:
*/
var d = new Date("Mar 25 2015");
console.log(d);

// Month and day can be in any order:
var d = new Date("25 Mar 2015");
console.log(d);

// And, month can be written in full (January), or abbreviated (Jan):


var d = new Date("January 25 2015");
console.log(d);

var d = new Date("Jan 25 2015");
console.log(d);

// Commas are ignored. Names are case insensitive:
var d = new Date("JANUARY, 25, 2015");
console.log(d);

/*
Date Input - Parsing Dates
    If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
    Date.parse() returns the number of milliseconds between the date and January 1, 1970:
*/
var msec = Date.parse("March 21, 2012");
console.log(msec);

// You can then use the number of milliseconds to convert it to a date object:
var msec = Date.parse("March 21, 2012");
var d = new Date(msec);
console.log(d);