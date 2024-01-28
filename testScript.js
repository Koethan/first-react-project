function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    return choices[random]
}


    let playerChoice;
    let rockBtn = document.querySelector('#rock')
    let paperBtn = document.querySelector('#paper')
    let scissorsBtn = document.querySelector('#scissors')
    let playerScore = 0
    let computerScore = 0

   


    let scoreDisplay = document.querySelector('#playerScore')
    let computerDisplay = document.querySelector('#computerScore')
    let resultsDisplay = document.querySelector('#gameResult')
    

    rockBtn.addEventListener('click', ()=>{
        playerChoice = 'rock'
        let results = (roundDynamic(getComputerChoice(), playerChoice))
        if(results.includes('win')){
            playerScore++
        } else if(results.includes('lose')){
            computerScore++
        }
                
        console.log(scoreCheck(computerScore, playerScore))
        resultsDisplay.textContent = results
        scoreDisplay.textContent = `player score is: ${playerScore} vs. computer score is: ${computerScore}`
    })


    paperBtn.addEventListener('click', ()=>{
        playerChoice = 'paper'
        let results = (roundDynamic(getComputerChoice(), playerChoice))
        
        if(results.includes('win')){
            playerScore++
        } else if(results.includes('lose')){
            computerScore++
        }

        console.log(scoreCheck(computerScore, playerScore))
        console.log(results)
        console.log(`player score is: ${playerScore} vs. computer score is: ${computerScore}`)
    })

    scissorsBtn.addEventListener('click', ()=>{
        playerChoice = "scissors"
        let results = (roundDynamic(getComputerChoice(), playerChoice))

        if(results.includes('win')){
            playerScore++
        } else if(results.includes('lose')){
            computerScore++
        }
        
        console.log(scoreCheck(computerScore, playerScore))
        console.log(results)
        console.log(`player score is: ${playerScore} vs. computer score is: ${computerScore}`)
    })
    


function roundDynamic(comp, player){

    if (comp == "rock" && player == "scissors" || comp == "paper" && player == "rock" || comp == "scissors" && player == "paper" ){
        
        return `You lose! ${comp} beats ${player}`

    } else if (player == "rock" && comp == "scissors" || player == "paper" && comp == "rock" || player == "scissors" && comp == "paper"){
        return `You win! ${player} beats ${comp}`
    } else if( comp == player){
        return `Its a tie!`      
    }
}


function scoreCheck(comp, player){
    if(comp >= 5){
        comp = 0
        player = 0
        return('the computer wins the game, thanks for playing!')

    }else if(player >= 5){
        comp = 0
        player = 0
        return('you win the game, thanks for playing!')

    }
    
}
