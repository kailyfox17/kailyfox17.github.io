const words = ['seal', 'shark', 'dolphin', 'starfish', 'seahorse', 'halibut', 'orca', 'octopus', 'crab', 'lobster','plankton', 'clownfish', 'cuttlefish', 'humpback', 'jellyfish', 'stingray', 'mussel', 'manatee', 'narwhal', 'oyster'];
let currentWord = null;
let scrambledWord = null;
let guesses = [];


const scrambledWordElement = document.getElementById('scrambled-word');
const guessForm = document.getElementById('guess-form');
const guessInputElement = document.getElementById('guess-input');
const messageElement = document.getElementById('message');
const newWordButton = document.getElementById('new-word-button');


function shuffleWord(word) {
    let shuffledWord = '';
    let wordArray = word.split('');
    while (wordArray.length > 0) {
      let randomIndex = Math.floor(Math.random() * wordArray.length);
      shuffledWord += wordArray[randomIndex];
      wordArray.splice(randomIndex, 1);
    }
    return shuffledWord;
  }
  
  function startGame() {
    guesses = [];
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = shuffleWord(currentWord);
    scrambledWordElement.innerText = scrambledWord;
    guessInputElement.value = '';
    messageElement.innerText = '';
  }

  function guessWord(event) {
    event.preventDefault();
    let guess = guessInputElement.value.toLowerCase();
    if (guess === currentWord) {
      messageElement.innerText = 'You guessed it!';
      newWordButton.style.display = 'block';
    } else if (guesses.includes(guess)) {
      messageElement.innerText = 'You already guessed that!';
    } else {
      guesses.push(guess);
      messageElement.innerText = 'Wrong guess, try again.';
    }
    guessInputElement.value = '';
  }
  
  startGame();
  
  guessForm.addEventListener('submit', guessWord);