'use strict';
// console.log(document.querySelector('.message').textContent);
let secnumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secnumber;
let check = document.querySelector('.check');
let Score = 20;
let highscore = 0;
let ScoreH = document.querySelector('.highscore');
function displaymessage(messgae) {
  document.querySelector('.message').textContent = messgae;
}
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  if (!guess) {
    console.log(!guess);
    // document.querySelector('.message').textContent = 'No nember';
    displaymessage('Please enter a number!');
  } else if (guess === secnumber) {
    // document.querySelector('.message').textContent = 'Correct! You win!';
    displaymessage('Correct! You win!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secnumber;
    // highscore = Score;

    if (Score > highscore) {
      highscore = Score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secnumber) {
    if (Score > 1) {
      // document.querySelector('.message').textContent = 'Too high!';
      displaymessage('Too high!');
      Score = Score - 1;
      document.querySelector('.score').textContent = Score;
    } else {
      // document.querySelector('.message').textContent = 'Too low!';
      displaymessage('Too low!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < secnumber) {
    if (Score > 1) {
      // document.querySelector('.message').textContent = 'Too low!';
      displaymessage('Too low!');
      Score = Score - 1;
      document.querySelector('.score').textContent = Score;
    } else {
      // document.querySelector('.message').textContent = 'No! you lost !';
      displaymessage('No! you lost !');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = secnumber;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  document.querySelector('.score').textContent = Score;
  secnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
