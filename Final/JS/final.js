const wordText = document.querySelector(".word"),
inputField = document.querySelector("input"),
newBtn = document.querySelector(".new-word"),
checkBtn = document.querySelector(".check-answer");

let correctWord;

const initGame = () => {
   let randomObj = words[Math.floor(Math.random() * words.length)];
   let wordArray = randomObj.word.split("");
   for (let i = wordArray.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
   }
   wordText.innerText = wordArray.join("");
   correctWord = randomObj.word.toLocaleLowerCase();
   console.log(randomObj);
}
initGame();

const checkAnswer = () =>{
let userAnswer = inputField.value.toLocaleLowerCase();
if(userWord !== correctWord) return alert('Sorry! ${userWord} is incorrect');
}

newBtn.addEventListner("click",initGame);
checkBtn.addEventListner("click",checkAnswer); 