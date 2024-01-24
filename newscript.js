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
        
         oneRound(comp, player)
         return

    }
  
}

// console.log(getComputerChoice())
// console.log(playerChoice())
console.log(oneRound(getComputerChoice(), playerChoice()))