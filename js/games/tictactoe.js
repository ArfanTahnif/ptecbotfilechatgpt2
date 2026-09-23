let board = [
"",
"",
"",
"",
"",
"",
"",
"",
""
];


let player = "X";



const wins = [

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];





function checkWinner(){


for(const combo of wins){


const [a,b,c]=combo;


if(

board[a] &&
board[a]===board[b] &&
board[a]===board[c]

){

return board[a];

}


}



if(!board.includes("")){

return "draw";

}


return null;


}







function cpuMove(){


let empty=[];


board.forEach((v,i)=>{

if(!v)
empty.push(i);

});



if(empty.length){


const move =
empty[
Math.floor(
Math.random()*empty.length
)
];


board[move]="O";


}



}






export function play(index){



if(board[index])
return;


board[index]="X";



let result =
checkWinner();


if(result)
return result;



cpuMove();



return checkWinner();


}






export function resetGame(){


board=[
"",
"",
"",
"",
"",
"",
"",
"",
];


}





export function getBoard(){


return board;


}
