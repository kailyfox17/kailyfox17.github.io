const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 82 fahrenheit on a sunny day, so :insertx: wanted to spend the day outdoors. When they got to :inserty:, they were so unbelievably happy! Until they saw :insertz:. Kaily saw the whole thing, so picked up their 20 pound purse and left.— :insertx: was upset, and decided to leave.';
const insertX = ['Santa', 'Doja Cat', 'my dog'];
const insertY = ['the beach', 'the park', 'Six Flags'];
const insertZ = ['an evil monster', 'their mom', 'how crowded it was'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Kaily', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(20/2.174) + ' kilogram';
    const temperature =  `${Math.round((82-32) * 5 / 9)} celsius`;
    newStory = newStory.replaceAll('82 fahrenheit', temperature);
    newStory = newStory.replaceAll('20 pound', weight );
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}