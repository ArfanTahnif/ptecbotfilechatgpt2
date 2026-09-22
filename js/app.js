import {

initTheme,
toggleTheme

}

from "./core/theme.js";


import {

initLifecycle

}

from "./core/lifecycle.js";


import {

navigate,
subscribe

}

from "./core/router.js";




import {

renderNotes

}

from "./features/notes.js";


import {

renderSearch

}

from "./features/search.js";


import {

renderPhonebook

}

from "./features/phonebook.js";


import {

renderTexGPT

}

from "./features/texgpt.js";






const app =
document.querySelector("#app");





function renderHome(){


return `


<section class="hero">


<h1>
PTEC NoteBOT
</h1>


<p>
Smart Textile Engineering Assistant
</p>



</section>




<div class="grid">



<div class="card"
data-nav="notes">

📚
<br>
Notes

</div>



<div class="card"
data-nav="search">

🔎
<br>
Search

</div>




<div class="card"
data-nav="texgpt">

🤖
<br>
TexGPT

</div>




<div class="card"
data-nav="phonebook">

☎
<br>
Phonebook

</div>



</div>



`;

}





function render(route){



switch(route){



case "notes":

app.innerHTML =
renderNotes();

break;



case "search":

app.innerHTML =
renderSearch();

break;



case "texgpt":

app.innerHTML =
renderTexGPT();

break;



case "phonebook":

app.innerHTML =
renderPhonebook();

break;



default:


app.innerHTML =
renderHome();



}



}









function setupEvents(){



document.addEventListener(

"click",

event=>{


const nav =

event.target.closest(
"[data-nav]"
);



if(nav){

navigate(
nav.dataset.nav
);


}




const action =

event.target.closest(
"[data-action]"
);



if(action){



if(
action.dataset.action==="theme"
){

toggleTheme();

}



}



}

);

}







function start(){



initTheme();


initLifecycle();



subscribe(render);



setupEvents();



render("home");



}



start();
