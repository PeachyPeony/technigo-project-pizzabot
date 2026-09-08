# JavaScript Pizzabot

## About the project
This project is an interactive pizza ordering program built with JavaScript. 
The user is guided through a series of questions to create a food order. 
The program asks for the user's name, food choice, meal choice, and whether the order is for a child or an adult. It then displays an order summary and asks the user to confirm the order. 

The project was created as part of a web development bootcamp to practice using variables, user input, conditional statements and basic JavaScript logic. 

## How it works
The Pizzabot guides the user through five steps: 

### 1. Welcome
The user is welcomed to the pizzeria and asked to enter their name.

### 2. Choose a food type
The user can choose between: 
- Pizza
- Pasta
- Salad 

### 3. Choose a meal
Depending on the food type selected, the user can choose from three different meals.

**Pizza**
- Margherita Pizza
- Pepperoni Pizza
- Hawaiian Pizza

**Pasta** 
- Spaghetti
- Carbonara
- Puttanseca

**Salad**
- Caesar Salad
- Greek Salad
- Garden Salad 

### 4. Choose the order type
The user chooses whether the order is for a child or an adult. 
The program then displays an order summary containing the customer's name, selected meal, age category and cost.

### 5. Confirm the order
Finally, the user can confirm or cancel the order. If the order is confirmed, the program displays a message saying that the meal will be prepared. If the user cancels the order the program displays a message confirming the order has ben cancelled. 

## Stretch goal: Refractoring
After completing the orgiginal Pizzabot, I chose to complete the optional stretch goal of refactoring the code.
The original Pizzabot uses `if`, `else if` and `else` statements and is kept in: 
script.js. The refactored version is kept separately in: switch.js.

In switch.js I replaces the if/else statements with switch, case and default statements while keeping the original functionality. Keeping both files makes it possible to compare the original and refactored versions. 

## Technologies used
- HTML 
- CSS
- JavaScript

## What I learned
Through this project I practised: 
- Declaring and using variables
- Getting user input with prompt()
- Displaying information with alert()
- Using conditional statements
- Working with switch and case
- Using break and default
- Using nested switch statements
- Refactoring existing code
- Testing and debugging JavaScript

## View it live
https://technigo-project-pizzabot-cy8.pages.dev/ 

## Author 
Made by Alicia in 2026 as part of a web developmet bootcamp.