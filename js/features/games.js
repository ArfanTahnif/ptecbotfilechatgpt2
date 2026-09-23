import {
    play as playTicTacToe,
    getBoard,
    resetGame
}
from "../games/tictactoe.js";


import {
    createMemory
}
from "../games/memory.js";


import {
    playRPS
}
from "../games/rps.js";




export function renderGames(){


return `


<section class="hero">


<h1>
🎮 Break Games
</h1>


<p>
Relax between study sessions
</p>


</section>




<div class="grid">


<div class="card"
data-action="start-game"
data-game="tictactoe">


⭕❌

<br>

Tic Tac Toe


</div>



<div class="card"
data-action="start-game"
data-game="memory">


🧵

<br>

Textile Memory


</div>




<div class="card"
data-action="start-game"
data-game="rps">


✊

<br>

Rock Paper Scissors


</div>



</div>




<div id="game-area"></div>


`;

}







export function openGame(game){



const area =
document.querySelector("#game-area");



if(!area)
return;



if(game==="tictactoe"){


resetGame();


area.innerHTML=`


<div class="card">


<h2>
⭕❌ Tic Tac Toe
</h2>


<div class="grid">


${

getBoard()

.map((x,i)=>`


<button

class="btn"

data-cell="${i}">

${x || " "}

</button>


`).join("")

}


</div>


</div>


`;



}






if(game==="memory"){


const cards =
createMemory();



area.innerHTML=`


<div class="card">


<h2>
🧵 Textile Memory
</h2>



<div class="grid">


${

cards.map(c=>`


<button class="btn">

❓

</button>


`).join("")

}


</div>



</div>


`;



}





if(game==="rps"){


area.innerHTML=`


<div class="card">


<h2>
✊ Rock Paper Scissors
</h2>



<button class="btn"
data-rps="rock">

Rock

</button>



<button class="btn"
data-rps="paper">

Paper

</button>



<button class="btn"
data-rps="scissors">

Scissors

</button>



<div id="rps-result"></div>


</div>


`;

}


}






export function handleGameAction(target){


if(target.dataset.cell){


const result =
playTicTacToe(
Number(target.dataset.cell)
);


console.log(result);


}



if(target.dataset.rps){


const result =
playRPS(
target.dataset.rps
);


document.querySelector("#rps-result")
.innerHTML = `

You: ${result.user}
<br>
CPU: ${result.cpu}
<br>
Result: ${result.result}

`;

}



}
