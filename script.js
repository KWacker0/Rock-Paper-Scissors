let comNum = Math.floor(Math.random() * 3) + 1;
if(comNum === 1) {
  comNum = "Rock";
}else if(comNum === 2) {
  comNum = "Paper";
}else if(comNum === 3) {
  comNum = "Scissors";
}


document.getElementById("start").addEventListener("click" , begin)
document.getElementById("rockIMG").addEventListener("click" , begin)
document.getElementById("paperIMG").addEventListener("click" , begin)
document.getElementById("scissorsIMG").addEventListener("click" , begin)

function begin(e) {
  if(e.target.id === "start") {
    document.getElementById("rulesBlock").className = "display-none";
  }

  if(e.target.id === "rockIMG" && comNum === "Rock") {
    if(comNum === "Rock") {
      alert("won")
    }else if(comNum === "Paper") {
      alert("lost")
    }else if(comNum === "Scissors") {
      alert("lost")
    }
  }
}













































// let bestCount = 0;
// let lossCount = 0;



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