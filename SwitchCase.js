/*
    You can use multiple
    if ...else… if statements, as in the previous tutorial, to perform a multiway branch.
    However, this is not always the best solution, especially when all of the branches depend on the value of a single variable.

    Syntax - 
    switch (expression) {
        case condition 1: statement(s)
            break;
        case condition 2: statement(s)
            break;
            ...
        case condition n: statement(s)
            break;
        default: statement(s)
    }
*/
console.log();
console.log('-------------------------');
console.log('Switch Case example - ');
console.log('-------------------------');

var grade = 'A';
console.log("Entering switch block");
switch (grade) {
    case 'A':
        console.log("Good job");
        break;

    case 'B':
        console.log("Pretty good");
        break;

    case 'C':
        console.log("Passed");
        break;

    case 'D':
        console.log("Not so good");
        break;

    case 'F':
        console.log("Failed");
        break;

    default:
        console.log("Unknown grade")
}
console.log("Exiting switch block");
/*
Break statements play a major role in switch-case statements. 
If there is no break statement it will execute the remaining case statements as well
*/
console.log();
console.log('-------------------------');
console.log('Switch Case example(without break) - ');
console.log('-------------------------');

var grade = 'A';
console.log("Entering switch block");
switch (grade) {
    case 'A':
        console.log("Good job");
    case 'B':
        console.log("Pretty good");
    case 'C':
        console.log("Passed");
    case 'D':
        console.log("Not so good");
    case 'F':
        console.log("Failed");
    default:
        console.log("Unknown grade")
}
console.log("Exiting switch block");
console.log();