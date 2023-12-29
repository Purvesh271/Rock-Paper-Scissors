let userScore = 0;
let compScore = 0;

//selecting parameters choice and msg and scores for user and comp
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");


//generating computer random choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//show winner logic
const showWinner =(userWin, compChoice) =>{
  if (userWin){    //if userWin is true
    userScore++ ;   //userScore +1
    userScorePara.innerText = userScore;

    console.log("You Win!!")   
    msg.innerText = `You Win!! computer chose ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{            //else user win  is false
    compScore++ ;   //compScore +1
    compScorePara.innerText = compScore;

    console.log("You lose..");
    msg.innerText = `You Lose.. computer chose ${compChoice}`;
    msg.style.backgroundColor = "red"; 
  }
};


//play game
const playGame = (userChoice) => {
  console.log("user choice = ",userChoice); //user choice
  const compChoice = genCompChoice(); //comp choice 
  console.log("comp choice = ",compChoice);

  //game win logic
  if(userChoice === compChoice){
    //draw
    console.log("DRAW");
    msg.innerText = `Draw.. computer chose ${compChoice} play again`;
    msg.style.backgroundColor = "white";
  }
  else{
    let userWin = true;
    if(userChoice === "rock"){
      //comp will choose paper/scissor
      userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
      //comp will choose rock/scissor
      userWin = compChoice === "scissor" ? false : true;
    }
    else{
      //userChocie is scissor
      //comp will choose rock/paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,compChoice);
  } 
};


//choice selection for user
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});