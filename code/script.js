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
let foodChoice = prompt("What type of food would you like to order? Please enter a number.\n" +
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
if (foodType == "Pizza") {
  let pizzaChoice = prompt(
    "Choose your pizza:\n" +
    "1. Margherita\n" +
    "2. Pepperoni\n" +
    "3. Hawaiian"
  );

  if (pizzaChoice == 1) {
    alert("You selected Margherita Pizza.");
  } else if (pizzaChoice == 2) {
    alert("You selected Pepperoni Pizza.");
  } else if (pizzaChoice == 3) {
    alert("You selected Hawaiian Pizza.");
  } else {
    alert("Invalid pizza choice.");
  }
} else if (foodType == "Pasta") {

  let pastaChoice = prompt(
    "Choose your pasta:\n" +
    "1. Spaghetti\n" +
    "2. Carbonara\n" +
    "3. Puttanesca"
  );

  if (pastaChoice == 1) {
    alert("You selected Spaghetti.");
  } else if (pastaChoice == 2) {
    alert("You selected Carbonara.");
  } else if (pastaChoice == 3) {
    alert("You selected Puttanesca.");
  } else {
    alert("Invalid pasta choice.");
  }

} else if (foodType == "Salad") {

  let saladChoice = prompt(
    "Choose your salad:\n" +
    "1. Ceasar Salad\n" +
    "2. Greek Salad\n" +
    "3. Garden Salad"
  );

  if (saladChoice == 1) {
    alert("You selected Ceaser Salad.");
  } else if (saladChoice == 2) {
    alert("You selected Greek Salad.");
  } else if (saladChoice == 3) {
    alert("You selected Garden Salad.");
  } else {
    alert("Invalid salad choice.");
  }
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
