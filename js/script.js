/*eslint-env browser*/

function displayTitle() {
    "use strict";
    window.alert("Welcome to the Guess The Number Game!");
}

function playGame() {
    "use strict";
    var number, count, guess;
    number = Math.floor(Math.random() * 10 + 1);
    window.alert("I am guessing a number between 1 and 10");
    count = 1;
    while (true) {
        guess = Number(window.prompt("Enter the number you guess"));
        if (guess < number) {
            window.alert("Too Low..!");
            count += 1;
        } else if (guess > number) {
            window.alert("Too High..!");
            count += 1;
        } else if (guess === number) {
            window.alert("You guessed the right number in " + count + " tries..!");
            return;
        }
        
    }
}

function main() {
    "use strict";
    displayTitle();
    var playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = window.prompt("Do you want to play again? (y/n)");
    }
    window.alert("Thanks for playing!");
}

main();
