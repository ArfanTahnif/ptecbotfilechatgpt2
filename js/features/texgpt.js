import {

TEX_KB

}

from "../config.js";





export function askTexGPT(question){



let q =
question.toLowerCase();



for(

const key in TEX_KB

){


if(q.includes(key)){


return TEX_KB[key];


}


}



return `

Sorry, I don't know this topic yet.

Try:
cotton, warp, weft, tex, carding

`;

}







export function renderTexGPT(){


return `


<div class="card">


<h2>
🤖 TexGPT
</h2>



<input

id="tex-question"

placeholder="Ask textile question"


>



<button

class="btn"

data-action="ask-tex">

Ask

</button>



<div id="tex-answer">

</div>


</div>



`;

}
