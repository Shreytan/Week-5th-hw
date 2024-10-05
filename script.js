// Variables
let name = 'Shreyansh Shukla';
let age = 20;

// Function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i + 1}`);
  greet(name);
}

// Output
console.log(`My name is ${name} and I am ${age} years old.`);