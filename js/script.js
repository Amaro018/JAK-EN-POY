const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("displayPlayer");
const comDisplay = document.getElementById("displayCom");
const resultDisplay = document.getElementById("displayResult");
const playerPts = document.getElementById("playerPts");
const comPts = document.getElementById("comPts");
let playerPoints = 0;
let comPoints = 0;
function playgame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

   if(playerChoice === computerChoice){
      result = "ITS A TIE!";
      }
  else{
      switch(playerChoice){
        case "rock":
          result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
          break;
        case "paper":
          result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
          break;
        case "scissors":
          result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
          break;
        }
   }

   playerDisplay.textContent = `PLAYER : ${playerChoice}`;
   comDisplay.textContent = `COMPUTER : ${computerChoice}`;
   resultDisplay.textContent = `PLAYER : ${result}`;

  
   resultDisplay.classList.remove("greenText", "redText");

   if(result === "YOU WIN"){
    resultDisplay.classList.add("greenText");
    playerPoints += 1;
    console.log(playerPoints);
    playerPts.textContent = `PLAYER :  ${playerPoints} PTS`;
   }
   else if(result === "YOU LOSE"){
    resultDisplay.classList.add("redText");
    comPoints += 1;
    console.log(comPoints);
    comPts.textContent = `COMPUTER :  ${comPoints} PTS`;
   }
 
   
  };