export function initLifecycle(){



/* Splash */


setTimeout(()=>{


const splash =
document.querySelector(
"#splash"
);



if(splash){

splash.classList.add(
"hide"
);

}



},1200);







/* Header Scroll */


window.addEventListener(

"scroll",

()=>{


const header =
document.querySelector(
"#header"
);



if(window.scrollY>20){

header?.classList.add(
"scrolled"
);


}

else{

header?.classList.remove(
"scrolled"
);


}



}

);



}
