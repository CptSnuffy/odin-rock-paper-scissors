

function computerPlay()
{
    rng = Math.floor(Math.random() * 3);
    if(rng == 0)
    {
        return 'rock';
    }
    else if (rng == 1)
    {
        return 'paper';
    }
    else if (rng == 2)
    {
        return 'scissors';
    }
    else
    {
        return 'error';
    }
}
function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i<5; i++) // This logic only allows for a max of five rounds played
    {
       playRound(window.prompt("Please enter rock, paper, or scissors: "), computerPlay()); 
    }
    console.log(`${userScore} and ${computerScore}`)

    if(userScore > computerScore)
    {
        alert(`You won ${userScore} out of 5 games`);
    }
    else if (userScore < computerScore)
    {
        alert(`The computer won ${computerScore} out of 5 games`);
    }
    else if (userScore == computerScore)
    {
        alert('You tied!');
    }
    else
    {
        alert('Error');
    }

    function playRound(playerSelection, computerSelection)
        {
            if(playerSelection.toLowerCase() == 'rock')
            {
                if(computerSelection.toLowerCase() == 'scissors')
                {
                    return userScore+=1;
                }
                else if (computerSelection.toLowerCase() == 'paper')
                {
                    computerScore+=1;
                    return computerScore+=1;
                }
                else if (computerSelection.toLowerCase() == 'rock')
                {
                    return null;
                }
                else
                {
                    return 'There is an issue (Please make sure you are using a correct input)';
                }
            }
            else if(playerSelection.toLowerCase() == 'paper')
            {
                if(computerSelection.toLowerCase() == 'rock')
                {
                    return userScore+=1;

                }
                else if (computerSelection.toLowerCase() == 'scissors')
                {
                    return computerScore+=1;
                }
                else if (computerSelection.toLowerCase() == 'paper')
                {
                    return null;
                }
                else
                {
                    return 'There is an issue (Please make sure you are using a correct input)';
                }
            }

            else if(playerSelection.toLowerCase() == 'scissors')
            {
                if(computerSelection.toLowerCase() == 'paper')
                {
                    return userScore+=1;
                }
                else if(computerSelection.toLowerCase() == 'rock')
                {
                    return computerScore+=1;
                }
                else if(computerSelection.toLowerCase() == 'scissors')
                {
                    return null;
                }
                else
                {
                    return 'There is an issue (Please make sure you are using a correct input)';
                }
            }

        }

}
//let gameState = playRound(window.prompt("Please enter rock, paper, or scissors: "), computerPlay())
game()