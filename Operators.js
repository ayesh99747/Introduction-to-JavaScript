/*
What is an Operator?
    * Let us take a simple expression 4 + 5 is equal to 9. 
    * Here 4 and 5 are called operands and ‘+’ is called the operator. 
    * JavaScript supports the following types of operators.
        * Arithmetic Operators
        * Comparison Operators
        * Logical (or Relational) Operators
        * Assignment Operators
        * Conditional (or ternary) Operators
*/

/*
Arithmetic Operators
    JavaScript supports the following arithmetic operators −
        + (Addition)
        - (Subtraction)
        * (Multiplication)
        / (Division)
        % (Modulus) - Outputs the remainder of an integer division
        ++ (Increment) - Increases an integer value by one
        -- (Decrement) - Decreases an integer value by one
*/
console.log('--------------------');
console.log('ARITHMETIC OPERATORS');
console.log('--------------------');

var a = 33;
var b = 10;

result = a + b;
console.log("a + b = ", result);

result = a - b;
console.log("a - b = ", result);

result = a / b;
console.log("a / b = ", result);

result = a % b;
console.log("a % b = ", result);

result = a + b;
console.log("a + b = ", result);

result = ++a;
console.log("++a = ", result);

result = --b;
console.log("--b = ", result);

/*
Comparison Operators
    JavaScript supports the following comparison operators −
        == (Equal) - 
            Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
        != (Not Equal) - 
            Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
        > (Greater than) -  
            Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition 
            becomes true.
        < (Less than) -     
            Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
        >= (Greater than or Equal to) - 
            Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, 
            then the condition becomes true.
        <= (Less than or Equal to) - 
            Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the 
            condition becomes true.
*/
console.log('--------------------');
console.log('COMPARISON OPERATORS');
console.log('--------------------');

var a = 10;
var b = 20;

result = (a == b);
console.log("(a == b) => ", result);

result = (a < b);
console.log("(a < b) => ", result);

result = (a > b);
console.log("(a > b) => ", result);

result = (a != b);
console.log("(a != b) => ", result);

result = (a >= b);
console.log("(a >= b) => ", result);

result = (a <= b);
console.log("(a <= b) => ", result);

/*
Logical Operators
    JavaScript supports the following logical operators −
        && (Logical AND) - 
            If both the operands are non-zero, then the condition becomes true.
        || (Logical OR) - 
            If any of the two operands are non-zero, then the condition becomes true.
        ! (Logical NOT) - 
            Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.
*/
console.log('--------------------');
console.log('LOGICAL OPERATORS');
console.log('--------------------');

var a = true;
var b = false;

result = (a && b);
console.log("(a && b) => ", result);

result = (a || b);
console.log("(a || b) => ", result);

result = (!(a && b));
console.log("!(a && b) => ", result);

/*
Bitwise Operators
    JavaScript supports the following bitwise operators −
        & (Bitwise AND) - 
            It performs a Boolean AND operation on each bit of its integer arguments.
        | (BitWise OR) - 
            It performs a Boolean OR operation on each bit of its integer arguments.
        ^ (Bitwise XOR) - 
            It performs a Boolean exclusive OR operation on each bit of its integer arguments. 
            Exclusive OR means that either operand one is true or operand two is true, but not both.
        ~ (Bitwise Not) - 
            It is a unary operator and operates by reversing all the bits in the operand.
        << (Left Shift) - 
            It moves all the bits in its first operand to the left by the number of places specified in the second operand. 
            New bits are filled with zeros. Shifting a value left by one position is equivalent to multiplying it by 2, shifting 
            two positions is equivalent to multiplying by 4, and so on.
        >> (Right Shift) - 
            Binary Right Shift Operator. The left operand’s value is moved right by the number of bits specified by the right operand.
        >>> (Right shift with Zero) - 
            This operator is just like the >> operator, except that the bits shifted in on the left are always zero.
*/
console.log('--------------------');
console.log('BITWISE OPERATORS');
console.log('--------------------');

var a = 2; // Bit presentation 10
var b = 3; // Bit presentation 11

result = (a & b);
console.log("(a & b) => ", result);

result = (a | b);
console.log("(a | b) => ", result);

result = (a ^ b);
console.log("(a ^ b) => ", result);

result = (~b);
console.log("(~b) => ", result);

result = (a << b);
console.log("(a << b) => ", result);

result = (a >> b);
console.log("(a >> b) => ", result);

/*
Assignment Operators
    JavaScript supports the following assignment operators −   	
        = (Simple Assignment ) - 
            Assigns values from the right side operand to the left side operand.
        += (Add and Assignment) - 
            It adds the right operand to the left operand and assigns the result to the left operand.
        −= (Subtract and Assignment) - 
            It subtracts the right operand from the left operand and assigns the result to the left operand.
        *= (Multiply and Assignment) - 
            It multiplies the right operand with the left operand and assigns the result to the left operand.
        /= (Divide and Assignment) - 
            It divides the left operand with the right operand and assigns the result to the left operand.
        %= (Modules and Assignment) - 
            It takes modulus using two operands and assigns the result to the left operand.
*/
console.log('--------------------');
console.log('ASSIGNMENT OPERATORS');
console.log('--------------------');

var a = 33;
var b = 10;

result = (a = b);
console.log("Value of a => (a = b) => ", result);

result = (a += b);
console.log("Value of a => (a += b) => ", result);

result = (a -= b);
console.log("Value of a => (a -= b) => ", result);

result = (a *= b);
console.log("Value of a => (a *= b) => ", result);

result = (a /= b);
console.log("Value of a => (a /= b) => ", result);

result = (a %= b);
console.log("Value of a => (a %= b) => ", result);

/*
Miscellaneous Operator
    JavaScript supports the following miscellaneous operators −   	
        ? : (Conditional ) - 
            If Condition is true? Then value X : Otherwise value Y
*/
console.log('-----------------------');
console.log('MISCELLANEOUS OPERATORS');
console.log('-----------------------');

var a = 10;
var b = 20;

result = (a > b) ? 100 : 200;
console.log("((a > b) ? 100 : 200) => ", result);

result = (a < b) ? 100 : 200;
console.log("((a < b) ? 100 : 200) => ", result);

/*
typeof Operator
    * The typeof operator is a unary operator that is placed before its single operand, which can be of any type. 
    * Its value is a string indicating the data type of the operand.
    * The typeof operator evaluates to "number", "string", or "boolean" if its operand is a number, string, or boolean value 
      and returns true or false based on the evaluation.

    * Here is a list of the return values for the typeof Operator.  	
        
    Type - String Returned by typeof
    Number - "number"
    String - "string"
    Boolean - "boolean"
    Object - "object"
    Function - "function"
    Undefined - "undefined"
    Null - "object"
*/
console.log('-----------------------');
console.log('typeof OPERATORS');
console.log('-----------------------');

var a = 10;
var b = "String";

result = (typeof b == "string" ? "B is String" : "B is Numeric");
console.log("Result => ", result);

result = (typeof a == "string" ? "A is String" : "A is Numeric");
console.log("Result => ", result);