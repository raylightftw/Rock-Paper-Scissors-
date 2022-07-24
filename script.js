/*
    function called getComputerChoice randomly returns either rock paper or scissors\
    take *case insensitive*  player's choice using a prompt()
    function called rockpaperscissors uses 2 parameters playerSelection and computerSelection 
    and returns a string that declares the winner of the round
    all this happens in a function called game() that keeps score of a 5 round game and reports winner or loser
*/


function getComputerChoice()
{
    
    let options=['rock','paper','scissors'];
    let x=Math.floor(Math.random()*options.length);
    return options[x];
}

let playerscore=0;
let computerscore=0;
let round=1;
var playtemp;
var choice;
function getPlayerChoice()
{
    playtemp = prompt("Rock, Paper or Scissors?");
    if( (playtemp.toLowerCase() == 'rock') || (playtemp.toLowerCase() == 'paper') || (playtemp.toLowerCase() == 'scissors') )
        {
            return playtemp;
        }
    else
        {
            console.log("Invalid input! Choose rock, paper or scissors!")
            getPlayerChoice();
        }
}
function playround(p,c)
{       
        
        if ( (p=='rock' && c=='paper') || (p=='paper' && c=='scissors') || (p=='scissor' && c=='rock') )
            {
            console.log(`You lose round ${round} by choosing ${p}! Computer chose ${c}. +1 for computer. Player: ${playerscore}, Computer: ${++computerscore} `);
        
            }
        
        else if (p==c)
            {
                console.log("Both computer and player chose the same one!")
            }    
        
        else
            {
             console.log(`You win round ${round} by choosing ${p}! Computer chose ${c}. +1 for player. Player: ${++playerscore}, Computer: ${computerscore}  `);

            }
}

function game()
{   playerscore=0;
    computerscore=0;
    for(round=1;round<=5;round++)
        {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playround(playerSelection,computerSelection);
        }
    console.log("5 Rounds are over!")
    if (computerscore>playerscore)
        {
            console.log("Computer wins!");
        }
    else if (computerscore==playerscore)
        {
            console.log("The game is tied!");
        }
    else
        console.log("Player wins!");

    choice = prompt("Would you like to play again?")
    if(choice.toLowerCase()=='yes')
        {
            game();
        }
    else
        {
            console.log("Thanks for coming!")
        }
}

game();

