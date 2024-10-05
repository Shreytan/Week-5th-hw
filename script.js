// Variables
let name = 'Shreyansh Shukla';
let age = 20;

// Function
function greet(name,age) {
  console.log(`Hello, ${name}! , your age is ${age}`);
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i + 1}`);
  greet(name);
}

// Output
console.log(`My name is ${name} and I am ${age} years old.`);