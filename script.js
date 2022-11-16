let comNum = 0;
let usrChoice = 0;
let winCount = 0;
let lossCount = 0;
let dispNum = 0;
let remAttem = -1;


document.getElementById("start").addEventListener("click" , begin);
document.getElementById("rockIMG").addEventListener("click" , begin);
document.getElementById("paperIMG").addEventListener("click" , begin);
document.getElementById("scissorsIMG").addEventListener("click" , begin);
document.getElementById("tryAgain").addEventListener("click" , begin);
document.getElementById("restart").addEventListener("click" , begin);


let comArr = []
  for(i=0; i < 4; i++) {
    comNum = Math.floor((Math.random()*3)+1);
    if(comNum === 1) {
      comNum = "Rock";
      comArr.push(comNum);
    }else if(comNum === 2) {
      comNum = "Paper";
      comArr.push(comNum);
    }else if(comNum === 3) {
      comNum = "Scissors";
      comArr.push(comNum);
    }
  }
console.log(comArr[0])

function begin(e) {
  if(e.target.id === "start") {
    document.getElementById("rulesBlock").className = "display-none";
    document.getElementById("gameBtns").className = "row margin-auto";
    document.getElementById("rockIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    document.getElementById("paperIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    document.getElementById("scissorsIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
  }
  
  let remoValue = 0;
    // Win Stuff
      // Win Rock
    if(e.target.id === "rockIMG" && comArr.includes("Scissors") === true) {
      remoValue = comArr.indexOf("Scissors")
      console.log(remoValue)
      comArr.splice(remoValue, 1)
      usrChoice = "Rock"
      winCount++
      remAttem = comArr.length
      if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
      document.getElementById("gameBtns").className = "display-none";
      document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
      document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
      document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Scissors you have ${remAttem} more trys to secure the vistory`;
      document.getElementById("tryAgain").innerHTML = `continue`;
      }
    }else 

    
      // Win Rock
    if(e.target.id === "paperIMG" && comArr.includes("Rock") === true) {
      remoValue = comArr.indexOf("Scissors")
      console.log(remoValue)
      comArr.splice(remoValue, 1)
      console.log(comArr)
      usrChoice = "Paper"
      winCount++
      remAttem = comArr.length
      if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
      document.getElementById("gameBtns").className = "display-none";
      document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
      document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
      document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Rock you have ${remAttem} more trys to secure the vistory`;
      document.getElementById("tryAgain").innerHTML = `continue`;
      }
    }else 

      
      // Win Paper
    if(e.target.id === "scissorsIMG" && comArr.includes("Paper") === true) {
      remoValue = comArr.indexOf("Scissors")
      console.log(remoValue)
      comArr.splice(remoValue, 1)
      console.log(comArr)
      usrChoice = "Scissors"
      winCount++
      remAttem = comArr.length
      if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
      document.getElementById("gameBtns").className = "display-none";
      document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
      document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
      document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Paper you have ${remAttem} more trys to secure the vistory`;
      document.getElementById("tryAgain").innerHTML = `continue`;
      }
    }else 
    
    
    // Loss Stuff
      // Loss Rock
    if(e.target.id === "rockIMG" && comArr.includes("Scissors") === false) {
      
      //Same Rock
      if(e.target.id === "rockIMG" && comArr.includes("Rock") === true) {
        usrChoice = "Rock";
        remAttem = comArr.length
        if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `We Tied!`;
        document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
        }
      }else {

        //Loss Rock
        dispNum = comArr[0];
        comArr.pop();
        usrChoice = "Rock"
        lossCount++
        remAttem = comArr.length
        if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `You Lost!`;
        document.getElementById("winLossCount").innerHTML = `${usrChoice} does not beat ${dispNum} you have ${remAttem} attempts left`; 
        }
      }
    }
      

      // Loss Paper
    if(e.target.id === "paperIMG" && comArr.includes("Rock") === false) {
      
      //Same Paper
      if(e.target.id === "paperIMG" && comArr.includes("Paper") === true) {
        usrChoice = "Paper";
        remAttem = comArr.length
        if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else{
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `We Tied!`;
        document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
        }
      }else {

        //Loss Paper
        dispNum = comArr[0];
        comArr.pop();
        usrChoice = "Paper"
        lossCount++
        remAttem = comArr.length
        if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `You Lost!`;
        document.getElementById("winLossCount").innerHTML = `${usrChoice} does not beat ${dispNum} you have ${remAttem} attempts left`;
        }
      }
    }
        
        // Loss Scissors
    if(e.target.id === "scissorsIMG" && comArr.includes("Paper") === false) {
      
      //Same Scissors
      if(e.target.id === "scissorsIMG" && comArr.includes("Scissors") === true) {
        usrChoice = "Scissors";
        remAttem = comArr.length
        if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `We Tied!`;
        document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
        }
      }else {

        //Loss Scissors
        dispNum = comArr[0];
        comArr.pop();
        usrChoice = "Scissors"
        lossCount++
        remAttem = comArr.length
        if(remAttem === 0) {
          document.getElementById("gameBtns").className = "display-none";
          document.getElementById("restScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
          document.getElementById("restMess").innerHTML = `Would You Like To play Again you won ${winCount} times out of 5 and lost ${lossCount} times out of 5`;
          if(e.target.id === "restart") {
            location.reload();
          }
        }else {
        document.getElementById("gameBtns").className = "display-none";
        document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
        document.getElementById("winLoss").innerHTML = `You Lost!`;
        document.getElementById("winLossCount").innerHTML = `${usrChoice} does not beat ${dispNum} you have ${remAttem} attempts left`;
        }
      }
    }
          
    
    // Try Again
    if(e.target.id === "tryAgain") {
      document.getElementById("winLossScrn").className = "display-none";
      document.getElementById("gameBtns").className = "row margin-auto";
      document.getElementById("rockIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
      document.getElementById("paperIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
      document.getElementById("scissorsIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    }
}