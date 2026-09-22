import {

save,
load

}

from "./storage.js";





export function initTheme(){



let theme =
    load(
        "theme",
        "dark"
    );



document.documentElement
.setAttribute(
    "data-theme",
    theme
);




updateIcon(theme);



}





export function toggleTheme(){



const current =
document.documentElement
.getAttribute(
    "data-theme"
);



const next =
current==="dark"
?
"light"
:
"dark";



document.documentElement
.setAttribute(
    "data-theme",
    next
);



save(
"theme",
next
);



updateIcon(next);



}




function updateIcon(theme){


const btn =
document.querySelector(
'[data-action="theme"]'
);



if(btn){

btn.textContent =
theme==="dark"
?
"☀️"
:
"🌙";

}


}
