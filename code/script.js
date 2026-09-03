// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your name?");

alert(`Hello and welcome, ${userName}!`);

// Step 2 - Food choice
// Your code goes here
let foodChoice = prompt("What type of food would you like to order?\n" +
  "1. Pizza\n" +
  "2. Pasta\n" +
  "3. Salad");

let foodType;

if (foodChoice == 1) {
  foodType = "Pizza";
} else if (foodChoice == 2) {
  foodType = "Pasta";
} else if (foodChoice == 3) {
  foodType = "Salad";
} else {
  alert("Invalid choice.");
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
