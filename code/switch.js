// Step 1 - Welcome and introduction
alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let userName = prompt("What is your name?");

alert(`Hello and welcome, ${userName}!`);

// Step 2 - Food choice

let foodChoice = prompt("What type of food would you like to order? Please enter a number.\n" +
    "1. Pizza\n" +
    "2. Pasta\n" +
    "3. Salad");

let foodType;

switch (foodChoice) {
    case "1":
        foodType = "Pizza";
        break;

    case "2":
        foodType = "Pasta";
        break;

    case "3":
        foodType = "Salad;"
        break;

    default: alert("Invalid choice");
}