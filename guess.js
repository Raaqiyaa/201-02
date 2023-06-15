var secretNumber = 5;
var attempts = 0;

for (var i = 1; i <= 3; i++) {
  var userGuess = parseInt(prompt("Guess the number:"));

  if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the number correctly!");
    break;
  } else if (userGuess < secretNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }

  attempts++;
}

if (attempts > 3) {
  console.log("Out of attempts! The secret number was " + 5 + ".");
}
