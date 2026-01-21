console.log("Hello World!");
document.write("Welcome to JavaScript Programming!");

//variables in javascript
//1. var 2. let 3. const

/* this is a multi-line comment */

var name = "Rahul";
name = "Shawn";
console.log(name);
document.write("<br>" + name);

var age = 47;
console.log("My age is " + age);
document.write("<br> My age is " + age);

name = "Shawn Schafer";
console.log(name);

let city = "New York";
console.log(city);

let city1;
city1 = "Los Angeles";
console.log(city1);

const Pi = 3.14;
console.log(Pi);

let a = 10;
let b = 5;
let sum = a + b;
console.log("The sum of a and b is " + sum);

let difference = a - b;
console.log("The difference of a and b is " + difference);

let product = a * b;
console.log("The product of a and b is " + product);

let quotient = a / b;
console.log("The quotient of a and b is " + quotient);

let modulus = a % b;
console.log("The modulus of a and b is " + modulus);

document.write("<br> The sum of a and b is " + sum);
document.write("<br> The difference of a and b is " + difference);
document.write("<br> The product of a and b is " + product);
document.write("<br> The quotient of a and b is " + quotient);
document.write("<br> The modulus of a and b is " + modulus);

//assignment opertators
let c = 10;
c+=5;
console.log("The value of c after +=5 is " + c);
c-=3;
console.log("The value of c after -=3 is " + c);
c*=2;
console.log("The value of c after *=2 is " + c);
c/=4;
console.log("The value of c after /=4 is " + c);
c%=3;
console.log("The value of c after %=3 is " + c);

//comparison operators
console.log("Comparison 5 and 3")
console.log(5 == 3);//are values the same or not
console.log(5 != 3);//are values different or not
console.log(5 > 3);//is 5 greater than 3
console.log(5 < 3);//is 5 less than 3
console.log(5 >= 3);//is 5 greater than or equal to 3
console.log(5 <= 3);//is 5 less than or equal to 3
console.log(5 === '5');//are values and data types the same
console.log(5 !== '5');//are values and data types different

//logical operators
let a1 = true;
let b1 = false;
console.log("Logical AND: " + (a1 && b1));
console.log("Logical OR: " + (a1 || b1));
console.log("Logical NOT: " + !a1);

//data types
//numbers
let num = 10;
console.log("The value of num is " + num);
console.log("The data type of num is " + typeof num);

//string
let str = "Hello World";
console.log("The value of str is " + str);
console.log("The data type of str is " + typeof str);

let fullName = "Shawn Schafer";
console.log(`The value of fullName is ${fullName}`);


//boolean
let bool = true;
console.log("The value of bool is " + bool);
console.log("The data type of bool is " + typeof bool);

//decimal
let dec = 10.5;
console.log("The value of dec is " + dec);
console.log("The data type of dec is " + typeof dec);

//undefined
let undef;
console.log("The value of undef is " + undef);
console.log("The data type of undef is " + typeof undef);

//null
let n = null;
console.log("The value of n is " + n);
console.log("The data type of n is " + typeof n);

//arrays
let arr = [1, 2, 3, 4, 5];
console.log("The value of arr is " + arr);
console.log("The data type of arr is " + typeof arr);

//objects
let obj = {name: "Shawn", age: 47};
console.log(obj);
console.log(typeof obj);

//symbol
let sym = Symbol("id");
console.log(sym);
console.log("The data type of sym is " + typeof sym);

//bigint
let bigInt = 9007199254740991n;
console.log("The value of bigInt is " + bigInt);
console.log("The data type of bigInt is " + typeof bigInt);

//ternary operator
let age1 = 20;
let status = (age1 >= 18) ? "Adult" : "Minor";
console.log("Status: " + status);

//urnary operator
let x = 5;

console.log("Value of x: " + ++x);

x = 5;
console.log("Value of x: " + x++);
console.log("Value of x after post-increment: " + x);

x = 5;
console.log("Value of x: " + --x);
x = 5;
console.log("Value of x: " + x--);
console.log("Value of x after post-decrement: " + x);

//bitwise operators
let p = 5;
let q = 3;
console.log("Bitwise AND: " + (p & q));
console.log("Bitwise OR: " + (p | q));
console.log("Bitwise XOR: " + (p ^ q));
console.log("Bitwise NOT: " + (~p));
console.log("Left shift: " + (p << 1));
console.log("Right shift: " + (p >> 1));