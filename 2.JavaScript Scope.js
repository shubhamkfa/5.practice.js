/*

1.Scope

function myFunction() {
  
    var pizzaName = "Margarita";
    // Code here can use pizzaName
    return pizzaName;
    
  }
  console.log(myFunction())
  
  // Code here can't use pizzaName
  

  2.Block Scoped Variables


  const isLoggedIn = true;

  if (isLoggedIn == true) {
    const statusMessage = 'Logged in.';
   
  }
  
  // Uncaught ReferenceError...
  
  console.log(statusMessage);

  
  // Variable declared globally



  Global Variables
const color = 'blue';

function printColor() {
  console.log(color);
}

printColor(); // => blue

let vs var
   
for (let i = 0; i < 3; i++) {
    // This is the Max Scope for 'let'
    // i accessible ✔️
  }
  // i not accessible ❌
  
   
Var
  for (var i = 0; i < 3; i++) {

    // i accessible ✔️
    console.log(i);
  
  }
  // i accessible ✔️
  console.log(i);
  var is scoped to the nearest function block, and let is scoped to the nearest enclosing block.
 


//   Loops with closures

  // Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
    setTimeout(_ => console.log(i), 10);
  }
  
  
  */

  // Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) { 
    setTimeout(_ => console.log(j), 10);
  }-*---------------------+-++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
 