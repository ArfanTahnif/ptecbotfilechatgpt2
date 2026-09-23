const choices=[

"rock",
"paper",
"scissors"

];





export function playRPS(user){



const cpu =

choices[

Math.floor(
Math.random()*3
)

];



let result;



if(user===cpu){


result="draw";


}

else if(

(user==="rock" && cpu==="scissors") ||

(user==="paper" && cpu==="rock") ||

(user==="scissors" && cpu==="paper")

){


result="win";


}

else{


result="lose";


}



return {

user,

cpu,

result

};


}
