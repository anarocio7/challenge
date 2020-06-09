// Generate a Random Number

let randomNumber = Math.floor(Math.random() * 100);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
// Added validation, value of yourGuess must be a Number
function checkGuess() {
    let yourGuess = Number(guessField.value);
    if(yourGuess > 100 || yourGuess < 1){
        alert('Value must be a number between 1 and 100')
    }
    if(guessCount === 1) {
// The textContent property sets or returns the text content of the specified node, and all its descendants
        guesses.textContent = 'Last Attempts: ';
    }
    guesses.textContent += yourGuess + ' ';

    if(yourGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You have guessed the number I was thinking!';
        lastResult.style.backgroundColor = 'green';
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = 'Sorry!! Game is over :( The correct answer was ' + randomNumber;
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong. Try Again';
        lastResult.style.color = 'red';
        if(yourGuess < randomNumber){
            lowOrHi.textContent = 'The number is higher than you think';
        } else if (yourGuess > randomNumber) {
            lowOrHi.textContent = 'Hey, do not go that far kid. Number is lower';
        }
    }
        guessCount++;
        guessField.value = '';
        guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    guessField.focus();
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  
function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }



