/*
The for Loop
    The 'for' loop is the most compact form of looping. It includes the following three important parts −
        * The loop initialization where we initialize our counter to a starting value. The initialization statement is executed before 
        the loop begins.
        * The test statement which will test if a given condition is true or not. If the condition is true, then the code given inside the 
        loop will be executed, otherwise the control will come out of the loop.
        * The iteration statement where you can increase or decrease your counter.

    You can put all the three parts in a single line separated by semicolons.
    
    The syntax of for loop is JavaScript is as follows −
        for (initialization; test condition; iteration statement) {
            Statement(s) to be executed if test condition is true
        }
*/
console.log();
console.log('-------------------------');
console.log('for Loops');
console.log('-------------------------');

var count;
console.log("Starting Loop");

for (count = 0; count < 10; count++) {
    console.log("Current Count : " + count);
}
console.log("Loop stopped!");
console.log();