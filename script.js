let comNum = 0;
let usrChoice = 0;
let winCount = 0;
let lossCount = 0;


document.getElementById("start").addEventListener("click" , begin)
document.getElementById("rockIMG").addEventListener("click" , begin)
document.getElementById("paperIMG").addEventListener("click" , begin)
document.getElementById("scissorsIMG").addEventListener("click" , begin)
document.getElementById("tryAgain").addEventListener("click" , begin)


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


function begin(e) {
  if(e.target.id === "start") {
    document.getElementById("rulesBlock").className = "display-none";
    document.getElementById("gameBtns").className = "row margin-auto";
    document.getElementById("rockIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    document.getElementById("paperIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
    document.getElementById("scissorsIMG").className = "img-fluid mx-auto d-inline-block centered margin-auto";
  }


console.log(comArr)
let remoValue = 0;
// Win Stuff
    // Win Rock
  if(e.target.id === "rockIMG" && comArr.includes("Scissors") === true) {
    remoValue = comArr.indexOf("Scissors")
    console.log(remoValue)
    comArr.splice(remoValue, 1)
    console.log(comArr)
    usrChoice = "Rock"
    winCount++
    let remAttem = comArr.length
    document.getElementById("gameBtns").className = "display-none";
    document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
    document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
    document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Scissors you have ${remAttem} more trys to secure the vistory`;
    document.getElementById("tryAgain").innerHTML = `continue`;
  }else 

    
    // Win Rock
    if(e.target.id === "paperIMG" && comArr.includes("Rock") === true) {
      remoValue = comArr.indexOf("Scissors")
    console.log(remoValue)
    comArr.splice(remoValue, 1)
    console.log(comArr)
    usrChoice = "Paper"
    winCount++
    let remAttem = comArr.length
    document.getElementById("gameBtns").className = "display-none";
    document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
    document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
    document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Rock you have ${remAttem} more trys to secure the vistory`;
    document.getElementById("tryAgain").innerHTML = `continue`;
  }else 

      
    // Win Paper
    if(e.target.id === "scissorsIMG" && comArr.includes("Paper") === true) {
    remoValue = comArr.indexOf("Scissors")
    console.log(remoValue)
    comArr.splice(remoValue, 1)
    console.log(comArr)
    usrChoice = "Scissors"
    winCount++
    let remAttem = comArr.length
    document.getElementById("gameBtns").className = "display-none";
    document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
    document.getElementById("winLoss").innerHTML = `Congrats! You Won!`;
    document.getElementById("winLossCount").innerHTML = `${usrChoice} beats Paper you have ${remAttem} more trys to secure the vistory`;
    document.getElementById("tryAgain").innerHTML = `continue`;
  }else 
    
    
    // Loss Stuff
      // Loss Rock
    if(e.target.id === "rockIMG" && comArr.includes("Scissors") === false) {
    comArr.pop();
    usrChoice = "Rock"
    lossCount++
    let remAttem = comArr.length
    document.getElementById("gameBtns").className = "display-none";
    document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
    document.getElementById("winLoss").innerHTML = `You Lost!`;
    document.getElementById("winLossCount").innerHTML = `${usrChoice} does not beat ${comNum} you have ${remAttem} attempts left`;
  }else 
      

      // Loss Paper
      if(e.target.id === "paperIMG" && comArr.includes("Rock") === false) {
        comArr.pop();
    usrChoice = "Paper"
    lossCount++
    let remAttem = comArr.length
    document.getElementById("gameBtns").className = "display-none";
    document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
    document.getElementById("winLoss").innerHTML = `You Lost!`;
    document.getElementById("winLossCount").innerHTML = `${usrChoice} does not beat ${comNum} you have ${remAttem} attempts left`;
  }else 
        
        // Loss Scissors
        if(e.target.id === "scissorsIMG" && comArr.includes("Paper") === false) {
        comArr.pop();
    usrChoice = "Scissors"
    lossCount++
    let remAttem = comArr.length
    document.getElementById("gameBtns").className = "display-none";
    document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
    document.getElementById("winLoss").innerHTML = `You Lost!`;
    document.getElementById("winLossCount").innerHTML = `${usrChoice} does not beat ${comNum} you have ${remAttem} attempts left`;
  }else  
          
          
    // Same Numbers

    // Same Rock
    if(e.target.id === "rockIMG" && comArr.includes("Rock") === true) {
      usrChoice = "Rock";
      let remAttem = comArr.length
      document.getElementById("gameBtns").className = "display-none";
      document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
      document.getElementById("winLoss").innerHTML = `We Tied!`;
      document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
    }else 
      
    // Same Paper
    if(e.target.id === "paperIMG" && comArr.includes("Paper") === true) {
      usrChoice = "Paper";
      let remAttem = comArr.length
      document.getElementById("gameBtns").className = "display-none";
      document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
      document.getElementById("winLoss").innerHTML = `We Tied!`;
      document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAtte} attempts left`;
    }else 
      
      // Same Sicissors
    if(e.target.id === "scissorsIMG" && comArr.includes("Scissors") === true) {
      usrChoice = "Scissors";
      let remAttem = comArr.length
      document.getElementById("gameBtns").className = "display-none";
      document.getElementById("winLossScrn").className = "text-center bg-light-blue col-4 centered vertical-align";
      document.getElementById("winLoss").innerHTML = `We Tied!`;
      document.getElementById("winLossCount").innerHTML = `Our choices were the same, you have ${remAttem} attempts left`;
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














































// 



// for(let j = 0; j<5; j++) {
//   let attemptNum = 5 - j;
//   let i = prompt(`Rock Paper or Scissors (Pay attention to spelling and capilization) You have ${attemptNum} attempts left. To stop type "Break"`)
//   if(i === "Rock") {
//     i = 1;
//   }else if(i === "Paper") {
//     i = 2;
//   }else if(i === "Scissors") {
//     i = 3;
//   }else if(i === "Break") {
//     break
//   }else {
//     alert(`Invilad Input`);
//     j = j - 1; continue

//   }
//   let comNum = Math.floor(Math.random() * 3) + 1;
//   if(i == comNum) {
//     alert(`You got it right!!`)
//     bestCount++
//   }else {
//     alert(`You Got it wrong`)
//     lossCount++
//   }
// }



// if(bestCount < 3) {
//   alert(`You Lost ${lossCount} times out of 5 and won ${bestCount} times out of 5`)
// }else if(bestCount === 3) {
//   alert(`You Won ${bestCount} times out of 5 and lost ${lossCount} times out of 5`)
// }else if(bestCount > 3) {
//   alert(`You Won ${bestCount} times out of 5 and lost ${lossCount} times out of 5`)
// }



// let tryAgain = prompt(`Would you like to try again? Type yes to try again.`)
// if(tryAgain == "yes") {
//   location.reload()
// }