// // => Hello world!
// console.log('Hello world!');

// // => Hello QuickRef.ME
// console.warn('hello %s', 'QuickRef.ME');

// // Prints error message to stderr
// console.error(new Error('Oops!'));

/* Number

let amount = 6;
let price = 4.99;


console.log(amount);
console.count(price);


*/ 


/* Variable

let x = null;
let name = "Tammy";
const found = false;

// => Tammy, false, null
console.log(name, found, x);

var a;
console.log(a); // => undefined


//Strings

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit?";

// => 21
console.log(single.length,double.length);


//Arithmatic Operators

5 + 5 = 10     // Addition
10 - 5 = 5     // Subtraction
5 * 10 = 50    // Multiplication
10 / 5 = 2     // Division
10 % 5 = 0     // Modulo

// This line will denote a comment

/*  
The below configuration must be 
changed before deployment. 



Assignment Operator



let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number); 
// => 120



//String Interpolation 
let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
`Tommy is ${age} years old.`;

console.log(`Tommy is ${age} years old`);


// Let Keyword
let count; 
console.log(count); // => undefined
count = 10;
console.log(count); // => 10



//Const Keyword

const numberOfColumns = 4;

// TypeError: Assignment to constant...
numberOfColumns = 8;
console.log(numberOfColumns);


#JavaScript Conditionals




If Statement
const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}



Ternary Operator 
var x=1;

// => true
result = (x == 1) ? true : false;
console.log(result);


Opoerators
Or Operator

true || false;       // true
10 > 5 || 10 > 20;   // true
false || false;      // false
10 > 100 || 10 > 20; // false


Logical Operator &&
true && true;        // true
1 > 2 && 2 > 1;      // false
true && false;       // false
4 === 4 && 3 > 1;    // true

Comparison Operators
1 > 3                // false
3 > 1                // true
250 >= 250           // true
1 === 1              // true
1 === 2              // false
1 === '1'            // false

Logical Operator !


let lateToWork = true;
let oppositeValue = !lateToWork;

// => false
console.log(oppositeValue); 

Nullish coalescing operator ??



null ?? 'I win';           //  'I win'
undefined ?? 'Me too';     //  'Me too'

false ?? 'I lose'          //  false
0 ?? 'I lose again'        //  0
'' ?? 'Damn it'            //  ''

//if else


const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small



const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}




//The == just check the value, === check both the value and the type.

// 0 == false   // true
// 0 === false  // false, different type
// 1 == "1"     // true,  automatic type conversion 
// 1 === "1"    // false, different type
// null == undefined  // true
// null === undefined // false
// '0' == false       // true
// '0' === false      // false

// console.log(1===2);
// console.log(null === null);


console.log('0' === '0' );


#JavaScript Functions

1.Functions

// Defining the function:


function rum(num1, num2) {
    return num1 - num2;
  }
  
  // Calling the function:
console.log(rum(-7,6)); // 9


  
2.Anonymous Functions



// Named function
// function rocketToMars() {
//     return 'NamedFunBOOM!';
//   }
  
//   // Anonymous function
//   const rocketToMars = function() {
//     return 'BOOM!';
//   }
//   console.log(rocketToMars());

//   function Don(){
//     return 'Gun'
//   }
//   console.log(Don());
  


3. 
// With return
// function sum(num1, num2) {
//     return num1 + num2;
//   }
  
  // The function doesn't output the sum
  function sum(num1, num2) {
    num1 + num2;
  }
  console.log(sum(5,4));
  

// 4. 
// Defining the function
function sum(num1, num2) {
    return num1 + num2;
  }
  
  // Calling the function
  sum(2, 4); // 6
  


Function Expressions

const dog = function() {
    return 'Woof!';
  }

  console.log(dog());



// The parameter is name
// function sayHello(name) {
//     return `Hello, ${name}!`;
//   }
  
//   console.log(sayHello("Shubham"));
//   console.log(sayHello("pragati"));

function sayHello(name,rame) {
        return `Hello, ${name} ${rame}!`;
      }
      
      console.log(sayHello("Shubham","shinde"));




      Function Declaration


function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(5,70));





  Arrow Functions (ES6)
With two arguments


  const sum = (param1, param2) => { 
    return param1 + param2; 
  }; 
  console.log(sum(2,5)); // => 7 
  


  With no arguments
 
  const printHello = () => { 
    console.log('hello'); 
  }; 
  printHello(); // => hello

    
  With a single argument



  const checkWeight = weight => { 
    console.log(`Weight : ${weight}`); 
  }; 
  checkWeight(25); // => Weight : 25 
  
Concise arrow functions

   */
const multiply = (a, b) => a * b; 
// => 60 
console.log(multiply(2, 30)); 



