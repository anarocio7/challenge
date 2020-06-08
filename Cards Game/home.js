// Generate a Random Number

let randomNumber = Math.floor(Math.random() * 100);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

checkguess => {
    let yourGuess = (guessField.value);
    if(typeof yourGuess != 'number' || yourGuess > 100 || yourGuess < 1){
        guesses.textContent('Please enter a valid number between 1 and 100')
    }
    if(guessCount === 1) {
        // The textContent property sets or returns the text content of the specified node, and all its descendants
        guesses.textContent = 'Last Attempts: ';
    }
    guesses.textContent += userGuess + ' ';

    if(yourGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You have guessed the number I was thinking!';
        lastResult.style.backgroundColor = 'green';
    } else if(guessCount === 10) {
        lastResult.textContent = 'Sorry!! Game is over :(';
    } else {
        lastResult.textContent = 'Wrong. Try Again';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'The number is higher than you think';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Hey, do not go that far kid. Number is lower';
        }
    }
        guessCount++;
        guessField.value = '';
        guessField.focus();
}

