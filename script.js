/*
    function called getComputerChoice randomly returns either rock paper or scissors\
    take *case insensitive*  player's choice using a prompt()
    function called rockpaperscissors uses 2 parameters playerSelection and computerSelection 
    and returns a string that declares the winner of the round
    all this happens in a function called game() that keeps score of a 5 round game and reports winner or loser
*/
/*
player presses a button that selects his option. event listener. computer choice is same as usual. shows the output.
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

var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var pscore=0;
var cscore=0;
rock.addEventListener('click',() => playround('rock'));
paper.addEventListener('click',() => playround('paper'));
scissors.addEventListener('click',() => playround('scissors'));
var body=document.querySelector('.text');
winner=document.createElement('div');
winner.classList.add('winner');



function playround(p)
{       const content=document.createElement('div');
        c=getComputerChoice();
        if ( (p=='rock' && c=='paper') || (p=='paper' && c=='scissors') || (p=='scissor' && c=='rock') )
            {
            content.textContent=`you lose round  by choosing ${p}! Computer chose ${c}. +1 for computer. Player: ${pscore} , Computer: ${++cscore}`;
            body.appendChild(content);
        
            }
        
        else if (p==c)
            {
                content.textContent="both computer and player chose the same one!";
                body.appendChild(content);

            }    
        
        else
            {
             content.textContent=`you win round  by choosing ${p}! Computer chose ${c}. +1 for player. Player: ${++pscore} , Computer: ${cscore}   `;
             body.appendChild(content);

            }
        
            if(pscore==5)
            {   winner.textContent="Player won! Clear screen?"
                body.appendChild(winner);
                pscore=0;
                cscore=0;

                
                playagain=document.createElement('button');
                playagain.textContent='Sure!'
                playagain.classList.add('button');
                body.appendChild(playagain)
                playagain.addEventListener("click",()=>{body.innerHTML="";})
            }
            if(cscore==5)
            {
                winner.textContent="Computer won! Clear screen?"
                pscore=0;
                cscore=0;

                playagain=document.createElement('button');
                playagain.textContent='Sure!'
                playagain.classList.add('button');
                body.appendChild(playagain)
                playagain.addEventListener("click",()=>{body.innerHTML="";})
            }
            
}


const disableButton = () =>
{
    rock.disabled=true;
    paper.disabled=true;
    scissors.disabled=true;

}
const enableButton = () =>
{   body.innerHTML="";
    rock.disabled=false;
    paper.disabled=false;
    scissors.disabled=false;
}

/* function game()
{   playerscore=0;
    computerscore=0;
    for(round=1;round<=5;round++)
        {
        
        let computerSelection = getComputerChoice();
        playround(computerSelection);
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
*/

