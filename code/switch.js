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

    default: alert("Invalid choice.");
}

// Step 3 - Subtype choice 
switch (foodType) {
    case "Pizza":

        pizzaChoice = prompt(
            "Choose your pizza:\n" +
            "1. Margherita\n" +
            "2. Pepperoni\n" +
            "3. Hawaiian"
        );

        switch (pizzaChoice) {
            case "1":
                orderItem = "Margherita Pizza";
                alert("You selected Margherita Pizza.");
                break;

            case "2":
                orderItem = "Pepperoni Pizza";
                alert("You selected Pepperoni Pizza.");
                break;

            case "3":
                orderItem = "Hawaiian Pizza";
                alert("You selected Hawaiian Pizza.");
                break;

            default:
                alert("Invalid pizza choice.");
        }
        break;

    case "Pasta":

        pastaChoice = prompt(
            "Choose your pasta:\n" +
            "1. Spaghetti\n" +
            "2. Carbonara\n" +
            "3. Puttanesca"
        );

        switch (pastaChoice) {
            case "1": orderItem = "Spaghetti";
                alert("You selected Spaghetti.");
                break;

            case "2":
                orderItem = "Carbonara";
                alert("You selected Carbonara.");
                break;

            case "3":
                orderItem = "Puttanesca";
                alert("You selected Puttanesca.");
                break;

            default: alert("Invalid pasta choice.");
        }

        break;

    case "Salad":

        saladChoice = prompt(
            "Choose your salad:\n" +
            "1. Ceasar Salad\n" +
            "2. Greek Salad\n" +
            "3. Garden Salad"
        );

        switch (saladChoice) {
            case "1":
                orderItem = "Caesar Salad";
                alert("You selected Caesar Salad.");
                break;

            case "2":
                orderItem = "Greek Salad";
                alert("You selected Greek Salad.");
                break;

            case "3":
                orderItem = "Garden Salad";
                alert("You selected Garden Salad.");
                break;

            default:
                alert("Invalid salad choice.");
        }
        break;
}
