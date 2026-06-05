const sum = (a, b) => a + b ;
console.log ( sum( 10, 20));


console.log(process.argv);

const [  , , num1, num2 ] = process.argv;

// cosnole.log( num1, num2);

console.log(sum(+num1, +num2));

// no dom in node.js

console.log( global);

console.log("Hello, 🌎!!!😘");

const double = (num) => num *2;

console.log(double(40));

// console.log(process.argv);
console.log(process.argv[2]);


const [, , num1] =process.argv;
console.log( num1);
console.log(double(num1));