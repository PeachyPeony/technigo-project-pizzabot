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
let pizzaChoice;
let pastaChoice;
let saladChoice;
let orderItem;
let cost;

if (foodType == "Pizza") {
  let pizzaChoice = prompt(
    "Choose your pizza:\n" +
    "1. Margherita\n" +
    "2. Pepperoni\n" +
    "3. Hawaiian"
  );

  if (pizzaChoice == 1) {
    orderItem = "Margherita Pizza";
    alert("You selected Margherita Pizza.");
  } else if (pizzaChoice == 2) {
    orderItem = "Pepperoni Pizza";
    alert("You selected Pepperoni Pizza.");
  } else if (pizzaChoice == 3) {
    orderItem = "Hawaiian Pizza";
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
    orderItem = "Spaghetti";
    alert("You selected Spaghetti.");
  } else if (pastaChoice == 2) {
    orderItem = "Carbonara";
    alert("You selected Carbonara.");
  } else if (pastaChoice == 3) {
    orderItem = "Puttanesca";
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
    orderItem = "Ceasar Salad";
    alert("You selected Ceasar Salad.");
  } else if (saladChoice == 2) {
    orderItem = "Greek Salad";
    alert("You selected Greek Salad.");
  } else if (saladChoice == 3) {
    orderItem = "Garden Salad";
    alert("You selected Garden Salad.");
  } else {
    alert("Invalid salad choice.");
  }
}

// Step 4 - Age
// Your code goes here
let age = prompt(
  "Is this order for a child or an adult?\n" +
  "1. Child\n" +
  "2. Adult\n\n" +
  "Please enter 1 or 2:"
);

if (age == 1) {
  cost = 8;
} else if (age == 2) {
  cost = 12;
} else {
  alert("Invalid choice. Please enter 1 or 2.");
}

let ageType;

if (age == 1) {
  ageType = "Child";
} else if (age == 2) {
  ageType = "Adult";
}

let orderMessage =
  `Order for ${userName}: ${orderItem}\n` +
  `Age: ${ageType}\n` +
  `Cost: £${cost}`;

alert(orderMessage);

// Step 5 - Order confirmation
// Your code goes here
let confirmation = prompt(
  "Would you like to confirm your order?\n" +
  "Please enter yes or no:"
);

if (confirmation.toLowerCase() == "yes") {
  alert(`Thank you, ${userName}! Your meal will be prepared.`);
} else {
  alert(`No problem, ${userName}. Thank you for visiting! ` +
    "We hope you will return for a future order.");
}
