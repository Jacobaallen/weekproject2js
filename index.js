let  readlineSync  =  require('readline-sync');

let choices = ['heads', 'tails'];
let score = {gambler: 0};
let rounds = 0;



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
    let st = 'w'
    pScore(st);
  }
  else {
   console.log('Try again, for another chance.')
   let st = 'l'
   pScore(st);
 }
  let houseChoice = index;
  return houseChoice;
}


  function pScore(stat) {
    if (stat == "w")
    score.gambler += 10;
    else {
      score.gambler -= 5;
    }
    console.log(`Your winnings are now $${score.gambler}.00`);
}


function cPlaying() {
  continuePlaying = readlineSync.question('Do you want to keep playing? (y/n): ');
  if(continuePlaying.toLowerCase() == 'n') {
      console.log('Thanks for ganbling!');
   } else {
      setGame();
 }
}

 function fullGame() {
     getUserChoice();
     getHouseChoice(userChoice);

 }

 function setGame(){
   for(let i = 0; i < 5; i++) {
     fullGame();
   }
   cPlaying();
  }


setGame();
