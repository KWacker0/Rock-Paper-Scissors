let comNum = 0;
let usrChoice = 0;
let winCount = 0;
let lossCount = 0;
let dispNum = 0;
let remAttem = 5;


document.getElementById("start").addEventListener("click" , begin);
document.getElementById("rockIMG").addEventListener("click" , begin);
document.getElementById("paperIMG").addEventListener("click" , begin);
document.getElementById("scissorsIMG").addEventListener("click" , begin);
document.getElementById("tryAgain").addEventListener("click" , begin);
document.getElementById("restart").addEventListener("click" , begin);



comNum = Math.floor((Math.random()*3)+1);
    

function begin(e) {
  if(e.target.id === "start") {
    document.getElementById("rulesBlock").className = "display-none";
    document.getElementById("gameBtns").className = "row margin-auto";
    document.getElementById("rockIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    document.getElementById("paperIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    document.getElementById("scissorsIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
  }
  

     //Rock
    if(e.target.id === "rockIMG") {
      usrChoice = "Rock"
      remAttem = remAttem - 1;
      if(remAttem === 0) {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost            ${lossCount} times out of 5`;
      }else
      if(comNum === 2) {
        winCount++
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
        document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Scissors you have ${remAttem} more trys to secure the victory`;
        document.getElementById("tryAgain").innerHTML = `Continue`;
      }else if(comNum === 1) {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `We Tied!`;
        document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
      }else {
        lossCount++
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `You Lost!`;
        document.getElementById("winLossCount").innerHTML = `You needed to choose Scissors to win you choose ${usrChoice}, you have ${remAttem} attempts left`;    
      }
      comNum = Math.floor((Math.random()*3)+1);
    }

  // Paper
  if(e.target.id === "paperIMG") {
      usrChoice = "Paper"
      remAttem = remAttem - 1;
      if(remAttem === 0) {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost            ${lossCount} times out of 5`;
      }else
      if(comNum === 1) {
        winCount++
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
      d  ocument.getElementById("winLossCount").innerHTML = `${usrChoice} beats Rock you have ${remAttem} more trys to secure the victory`;
        document.getElementById("tryAgain").innerHTML = `Continue`;
      }else if(comNum === 2) {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `We Tied!`;
        document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
      }else {
        lossCount++
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `You Lost!`;
        document.getElementById("winLossCount").innerHTML = `You needed to choose Rock to win you choose ${usrChoice}, you have ${remAttem} attempts left`;    
      }
      comNum = Math.floor((Math.random()*3)+1);
    }

// Scissors
  if(e.target.id === "scissorsIMG") {
      usrChoice = "Scissors"
      remAttem = remAttem - 1;
      if(remAttem === 0) {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost            ${lossCount} times out of 5`;
      }else
      if(comNum === 2) {
        winCount++
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
        document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Paper you have ${remAttem} more trys to secure the victory`;
        document.getElementById("tryAgain").innerHTML = `Continue`;
      }else if(comNum === 3) {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `We Tied!`;
        document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
      }else {
        lossCount++
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `You Lost!`;
        document.getElementById("winLossCount").innerHTML = `You needed to choose Paper to win you choose ${usrChoice}, you have ${remAttem} attempts left`;    
      }
      comNum = Math.floor((Math.random()*3)+1);
    }

  
    // Try Again
    if(e.target.id === "tryAgain") {
      document.getElementById("winLossScrn").className = "display-none";
      document.getElementById("gameBtns").className = "row margin-auto";
      document.getElementById("rockIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
      document.getElementById("paperIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
      document.getElementById("scissorsIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    }
  
  // Restart
  if(e.target.id === "restart") {
    location.reload();
  }
}    