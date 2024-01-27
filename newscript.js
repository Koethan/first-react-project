
function game(){

    function getComputerChoice(){
        let random = Math.floor(Math.random() * 3)
        if(random == 0){
            return "rock"
        }else if(random == 1){
            return "paper"
        }else if(random == 2){
            return "scissors"
        }
    
    }

    function playerChoice(){
        let choice = prompt("please enter rock, paper, scissors").toLowerCase()
        return choice
    
    }

    function oneRound(comp, player){
    
        if (comp == "rock" && player == "scissors" || comp == "paper" && player == "rock" || comp == "scissors" && player == "paper" ){
            
            return `You lose! ${comp} beats ${player}`
    
        } else if (player == "rock" && comp == "scissors" || player == "paper" && comp == "rock" || player == "scissors" && comp == "paper"){
            return `You win! ${player} beats ${comp}`
        } else if( comp == player){
            return `Its a tie!`
            
        }
      
        
    }  

    let resultDisplay = document.getElementById('resultDisplay')
    let answer = document.createElement('p')
    let compChoice = getComputerChoice()
    

    let rockBtn = document.getElementById('rock')
    rockBtn.addEventListener('click',()=>{
        answer.textContent = oneRound(compChoice, 'rock')
        resultDisplay.appendChild(answer)
        // console.log(oneRound(compChoice, 'rock'))
    })
    
    let paperBtn = document.querySelector('#paper')
    paperBtn.addEventListener('click', ()=>{
        answer.textContent = oneRound(compChoice, paperBtn.value)
        resultDisplay.appendChild(answer)
        // console.log(oneRound(compChoice, paperBtn.value))
    })

    
    let scissorsBtn = document.querySelector('#scissors')
    scissorsBtn.addEventListener('click', ()=>{
        answer.textContent = oneRound(compChoice, scissorsBtn.value)
        resultDisplay.appendChild(answer)
        // console.log(oneRound(compChoice, scissorsBtn.value))
    })

    
    







    // for (let i = 0; i <=4; i++){
    //     console.log(oneRound(getComputerChoice(), playerChoice()))
    // }

    // for(let i = 0; i <=4; i++){
    //     // if((oneRound(getComputerChoice(), playerChoice())) == `Its a tie!`){
    //     //     i--
    //     // }else{
    //     //     console.log(oneRound(getComputerChoice(), playerChoice()))
    //     // }
    //     console.log(oneRound(getComputerChoice(), playerChoice()))
    // } 



    // let count = 1
    // while(count<=5){
    //     if(oneRound(getComputerChoice(), playerChoice())== "Its a tie!"){
    //         console.log(oneRound(getComputerChoice(), playerChoice()))
    //         console.log('no')

    //     }else{
    //         console.log(oneRound(getComputerChoice(), playerChoice()))
    //         console.log(`round ${count}`)
    //         console.log('yes')
    //         count++
    //     }
    // }
}

game()


//this is code from one of the completed projects on odin project

// function getComputerChoice() {
//     var a = "rock";
//     var b = "paper";
//     var c = "scissor";
  
//     const stringsArray = [a, b, c];
//     const randomIndex = Math.floor(Math.random() * stringsArray.length);
//     const randomString = stringsArray[randomIndex];
  
//     // console.log(`this is computer choice :${randomString}`);
//     return randomString;
//   }

// function Rounds(playerSelection , computerSelection){
//     playerSelection = playerSelection.toLowerCase();

//     const validMoves = ["rock", "paper" , "scissor"];
//     if(validMoves.includes(playerSelection)){
//         console.log("valid move");
//     }
//     else {
//         console.log("invalid move");
//         return "Invalid move. Please choose rock, paper, or scissors.";
//     }

//     // checking for a tie
//     if(playerSelection === computerSelection){
//         var str = "It's a tie! Try again.";
//         // console.log(str);
//         return str;
//     }

//     //determing winner
//     if (
//         (playerSelection === "rock" && computerSelection === "scissor") ||
//         (playerSelection === "paper" && computerSelection === "rock") ||
//         (playerSelection === "scissor" && computerSelection === "paper")
//       ) {
//         var winMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
//         // console.log(winMessage);
//         return winMessage;
//       } else if (
//         (playerSelection === "scissor" && computerSelection === "rock") ||
//         (playerSelection === "rock" && computerSelection === "paper") ||
//         (playerSelection === "paper" && computerSelection === "scissor")
//       ) {
//         var loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
//        // console.log(loseMessage);
//         return loseMessage;
//       }
//       return "Unexpected error. Please try again.";
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let round = 1; round <= 5; round++) {
//         const playerSelection = prompt("Enter your choice (rock, paper, or scissor):");
//         const computerSelection = getComputerChoice();

//         console.log(`Round ${round}:`);
//         console.log(`Player choice: ${playerSelection}`);
//         console.log(`Computer choice: ${computerSelection}`);

//         const result = Rounds(playerSelection, computerSelection);

//         if (result.includes("Win")) {
//             playerScore++;
//         } else if (result.includes("Lose")) {
//             computerScore++;
//         }

//         console.log(result);
//         console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
//         console.log("------------------");
//     }

//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//     } else if (playerScore < computerScore) {
//         console.log("Computer wins the game!");
//     } else {
//         console.log("It's a tie! The game is drawn.");
//     }
// }

// game();