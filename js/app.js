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




// Features

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



import {

renderGames,
openGame,
handleGameAction

}

from "./features/games.js";




// Admin

import {

renderAdmin

}

from "./admin/dashboard.js";






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





<div class="card"
data-nav="games">


🎮

<br>

Games


</div>





<div class="card"
data-nav="admin">


⚙

<br>

Admin


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





case "games":


app.innerHTML =
renderGames();


break;





case "admin":


app.innerHTML =
renderAdmin();


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


closeDrawer();


return;


}






const action =

event.target.closest(
"[data-action]"
);




if(action){



switch(
action.dataset.action
){



case "theme":

toggleTheme();

break;




case "menu":

toggleDrawer();

break;



case "start-game":


openGame(
action.dataset.game
);


break;



}



}






handleGameAction(
event.target
);



}

);



}









function toggleDrawer(){


const drawer =
document.querySelector("#drawer");


drawer?.classList.toggle(
"active"
);



}






function closeDrawer(){


document
.querySelector("#drawer")
?.classList.remove(
"active"
);


}








function start(){



initTheme();


initLifecycle();



setupEvents();



subscribe(render);



render("home");



}





start();


}


if(
"serviceWorker" in navigator
){

navigator.serviceWorker.register(
"sw.js"
);

}
start();
