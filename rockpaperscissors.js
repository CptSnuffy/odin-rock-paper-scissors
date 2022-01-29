

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


function game()
{
    let userScore = 0;
    let computerScore = 0;
    
    let rockClicked = false;
    let paperClicked = false;
    let scissorsClicked = false;

    //Assigns you win, you lose text, and you tied objects and hides them at game start.
    let youWin = document.querySelector('.win');
    youWin.setAttribute('style', 'visibility: hidden');

    let youLose = document.querySelector('.lose');
    youLose.setAttribute('style', 'visibility: hidden');

    let youTied = document.querySelector('.tied');
    youTied.setAttribute('style', 'visibility: hidden');

    //Assigns clickable buttons
    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');

    rock.onclick = () => {gameLogic('rock');};
    paper.onclick = () => {gameLogic('paper');};
    scissors.onclick = () => {gameLogic('scissors');};
    function gameLogic(playerChoice)
    {
        computerChoice = computerPlay();
        console.log(playerChoice);
        console.log(computerChoice);
        
        //Tie scenario
        if(playerChoice == computerChoice)
        {
            youWin.setAttribute('style', 'visibility: hidden');
            youLose.setAttribute('style', 'visibility: hidden');
            youTied.setAttribute('style', 'visibility: visible');
        }

        //Computer win scenarios
        else if(playerChoice == 'rock' && computerChoice == 'paper')
        {
            youWin.setAttribute('style', 'visibility: hidden');
            youLose.setAttribute('style', 'visibility: visible');
            youTied.setAttribute('style', 'visibility: hidden');
        }
        else if(playerChoice == 'paper' && computerChoice == 'scissors')
        {
            youWin.setAttribute('style', 'visibility: hidden');
            youLose.setAttribute('style', 'visibility: visible');
            youTied.setAttribute('style', 'visibility: hidden');
        }
        else if(playerChoice == 'scissors' && computerChoice == 'rock')
        {
            youWin.setAttribute('style', 'visibility: hidden');
            youLose.setAttribute('style', 'visibility: visible');
            youTied.setAttribute('style', 'visibility: hidden');
        }

        //Player win scenarios
        else if (playerChoice == 'rock' && computerChoice == 'scissors')
        {
            youWin.setAttribute('style', 'visibility: visible');
            youLose.setAttribute('style', 'visibility: hidden');
            youTied.setAttribute('style', 'visibility: hidden');
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock')
        {
            youWin.setAttribute('style', 'visibility: visible');
            youLose.setAttribute('style', 'visibility: hidden');
            youTied.setAttribute('style', 'visibility: hidden');
        }
        else if (playerChoice == 'scissors' && computerChoice == 'paper')
        {
            youWin.setAttribute('style', 'visibility: visible');
            youLose.setAttribute('style', 'visibility: hidden');
            youTied.setAttribute('style', 'visibility: hidden');
        }
    }
}
//let gameState = playRound(window.prompt("Please enter rock, paper, or scissors: "), computerPlay())
game()