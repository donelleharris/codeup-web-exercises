"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if(color === 'blue'){
        return "blue is the color of the sky"
    } else if(color === 'red'){
        return "strawberries are red"
    } else if(color === 'cyan'){
        return "I don't know anything about cyan"
    } else {
       return "I don't know that color"
    }
}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var colorAnalyzer = function (color) {
    switch (color.toLowerCase()) {
        case "blue":
            alert("blue is the color of the sky")

        case "red":
            alert("strawberries are red")

        case "cyan":
            alert("I don't know anything about cyan")

        default:
            alert("I don't know that color")
    }
}
console.log(colorAnalyzer(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt("What is your favorite color?")
console.log(colorAnalyzer(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var discount;
var totalBill;
function calculateTotal(luckyNumber, totalAmount){
    switch (luckyNumber){
        case 0:
            totalBill = totalAmount;
            alert("Sorry, no discount today. Your total is: $" + totalBill.toFixed(2))
        case 1:
            discount = .90;
            totalBill = totalAmount * discount;
            alert("You get a 10% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 2:
            discount = .80;
            totalBill = totalAmount * discount;
            alert("You get a 20% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 3:
            discount = .67
            totalBill = totalAmount * discount;
            alert("You get a 33% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 4:
            discount = .50
            totalBill = totalAmount * discount;
            alert("You get a 50% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 5:
            totalBill = 0
            alert("You get a 100% discount today! Your new total is: $" + totalBill.toFixed(2))

    }
}
calculateTotal(2,100);
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

var luckyNumber = [0, 1, 2, 3, 4, 5];
var randomNumber = luckyNumber[Math.floor(Math.random() * luckyNumber.length)];
var discount;
var totalBill;
var totalAmount = prompt("What is your bill total today?")
function calculateTotal(rando, meal){
    switch (rando){
        case 0:
            totalBill = meal;
            alert("Sorry, no discount today. Your total is: $" + meal)
            break;
        case 1:
            discount = .90;
            totalBill = meal * discount;
            alert("You get a 10% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 2:
            discount = .80;
            totalBill = meal * discount;
            alert("You get a 20% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 3:
            discount = .67
            totalBill = meal * discount;
            alert("You get a 33% discount today! Your new total is: $" + totalBill.toFixed(2))
        case 4:
            discount = .50
            totalBill = meal * discount;
            alert("You get a 50% discount today! Your new total is: $" + totalBill.toFixed(2))
            break;
        case 5:
            totalBill = 0
            alert("You get a 100% discount today! Your new total is: $" + totalBill.toFixed(2))

    }
}
calculateTotal(randomNumber, totalAmount);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function playAGame(){
    var playGame = confirm("Would you like to play a game?");
    if (playGame) {
        var userNumber = prompt("Please enter a whole number without decimals:")
        if(isNaN(userNumber)){
            alert("That was not a number.")
        } else {
            var evenOdd = (userNumber % 2 === 0) ? "Your number is even." : "Your number is odd."
            var positiveNegative = (userNumber > 0) ? "Your number is positive" : "Your number is negative"
            alert(evenOdd)
            alert(positiveNegative)
            alert("Your number plus 100 is " + (parseInt(userNumber) + 100))
        }

    } else alert("Party pooper!")
}
playAGame();