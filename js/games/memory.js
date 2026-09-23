const icons=[

"🧵",
"🧶",
"✂️",
"👕",
"🪡",
"🏭"

];



let cards=[];



export function createMemory(){



cards=[

...icons,
...icons

]

.sort(
()=>Math.random()-.5
);



return cards;



}




export function checkMatch(a,b){


return cards[a]===cards[b];


}
