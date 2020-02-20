// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.classList.contains('play-again')) {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(e) {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    return setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over, won
    gameOver(true, `${winningNum} is correct! You won!`);
  } else {
    // Wrong number
    guessesLeft--;

    if (guessesLeft === 0) {
      // Game over, lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong
      guessInput.value = '';

      // Tell user it's the wrong guess
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable Input
  guessInput.disabled = true;

  // Set message
  setMessage(msg, color);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message function
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}
