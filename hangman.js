function startGame() {
alert("Try to guess this Movie, you can miss 6 letters");
var pickWord = function () {

   var words = [
    "gladiator",
    "inception",
    "frozen",
    "hancock"
  ];
return words[Math.floor(Math.random() * words.length)];
};


//console.log("check");
var setupAnswerArray = function () {
  var answerArray =[];
  for (var i = 0; i < word.length; i++) {
    answerArray[i]  = "_";
  }

var remainingLetters = word.length;

return answerArray;
};

var showPlayerProgress = function () {
  alert ("This is the movie you need to guess: " + answerArray.join(" "));
  // alert("you have " + remainingLetters + " chances left");
};

var getGuess = function () {
  var guess = prompt("Guess a letter, or click Cancel to stop playing");
  guess = guess.toLowerCase();
  return guess;
};


var updateGameState = function(guess, word, answerArray, wrongGuesses) {
  //update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  var correctGuess = false;
  var correctGuesses = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess && answerArray[i] === "_") {
      answerArray[i] = guess;
      correctGuesses++;
      correctGuess = true;
    } else if (word[i] === guess) {
      alert("You already guessed that letter.");
      correctGuess = true;
    }
  }
  if (!correctGuess) {
    wrongGuesses--;
      alert("you have " + wrongGuesses + " chances left");
  }
  var guessArray = [correctGuesses, wrongGuesses];
  return guessArray;
};

var showAnswerAndCongratulatePlayer = function(answerArray, wrongGuesses) {

  //use alert to show the answer and congratulate the player
  if (wrongGuesses === 0) {
    alert("Game Over");
  } else {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
  }
};
var word = pickWord();
var wrongGuesses = 6;
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;


while (remainingLetters > 0) {

  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
  break;
} else if (guess.length !== 1) {
  alert("Please enter a single letter.");
  } else {
  var guessArray = updateGameState(guess, word, answerArray, wrongGuesses);
  var correctGuesses = guessArray[0];
  wrongGuesses = guessArray[1];
  remainingLetters -= correctGuesses;
}
if(wrongGuesses === 0) {
  break;
}
 }
showAnswerAndCongratulatePlayer(answerArray, wrongGuesses);
}
      // console.log(answerArray)
      // console.log(remainingLetters)
      // console.log(guess)
      // console.log(numGuess)
