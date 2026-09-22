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
onRouteChange
}
from "./core/router.js";





const app =
document.querySelector(
"#app"
);






function render(route){



app.innerHTML = `


<section class="hero rv">


<h1>
PTEC NoteBOT
</h1>


<p>
Smart Academic Assistant
</p>



</section>



<div class="card rv">

<h3>
Current Page
</h3>


<p>
${route}
</p>


</div>


`;



}








function events(){



document.addEventListener(

"click",

e=>{


const nav =
e.target.closest(
"[data-nav]"
);



if(nav){


navigate(
nav.dataset.nav
);


}





const action =
e.target.closest(
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


events();



onRouteChange(
render
);



render("home");



}



start();
