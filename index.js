let  readlineSync  =  require('readline-sync');

let choices = ['heads', 'tails'];
let score = {gambler: 0};
let rounds = 0;
let i = 0;


function getUserChoice() {
  userChoice = readlineSync.question('Choose between heads or tails:');
  rounds ++;
  userChoice = userChoice.toLowerCase()

  return userChoice;
}



function getHouseChoice(userChoice) {
  let index = Math.floor(Math.random() * 2);
  if(index === 1) {
    index = 'heads'
  } else  {
    index = 'tails'
  }
  if(userChoice === index) {
    console.log('YOUR THE BIG WINNER!!!');
    winnings();
  }
  else {
   console.log('Try again, for another chance.')
   lossings();
 }
  let houseChoice = index;
  return houseChoice;
}


  function winnings() {
    score.gambler += 10
    console.log(`Your winnings are now ${score.gambler}`)
}


  function lossings() {
    score.gambler -= 5
    console.log(`Your lossings are now ${score.gambler}`)
}


 function game() {
     getUserChoice();
     getHouseChoice(userChoice);
 }


do {
  game();
  i++
}
while (i < 5)
