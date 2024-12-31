let user=0;
let computer=0;

const choices=document.querySelectorAll(".choice");
const pMsg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#friend-score");


const genComputerChoice=()=>{
    const option=["rock","paper","scissors"];
   const randIdx=Math.floor (Math.random()*3);
   return option[randIdx];
};
const drawGame=()=>{
    console.log("game was draw.");
    pMsg.innerText="game was draw. play again"
    pMsg.style.backgroundColor="#081b30";
};
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
       user++;
       userScore.innerText=user;
       console.log("you win");
    pMsg.innerText=`you win  your ${userChoice} beats ${compChoice}`;
    pMsg.style.backgroundColor="green";
}
else{
    computer++;
    compScore.innerText=computer;
    console.log("you lose");
    pMsg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
    pMsg.style.backgroundColor="red";
}
};

const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
const compChoice=genComputerChoice();
console.log("computer choice =",compChoice);
 if(userChoice===compChoice){
  drawGame();
 }else{
     let userWin=true;
     if(userChoice==="rock"){
        compChoice==="paper"?false:true;
     }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"? false:true;
     }else{
      userWin= compChoice==="rock"?false:true; 
     }
     showWinner(userWin,userChoice,compChoice);
 }

};

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
  
     playGame(userChoice);

    });
});