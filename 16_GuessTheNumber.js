let x = Math.random() * 100;
let number = Math.round(x);
let guesses = 0;
let input;

do {
    input = prompt("Enter your guess (0-100)");
    input = Number.parseInt(input);
    guesses++;

    if (number === input) {
        console.log("Number is found");
        console.log("The number of guesses: " + guesses);
    } else if (number > input) {
        console.log("Number is greater than your guess");
    } else if (number < input) {
        console.log("Number is smaller than your guess");
    }
} while (number !== input);

console.log("The random number was: " + number);
console.log("Display score: " + (100 - guesses));


