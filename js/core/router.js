let currentRoute = "home";


const listeners = [];



export function navigate(route){


currentRoute = route;


history.pushState(

{route},

"",
"#"+route

);



notify();



}




export function getRoute(){

return currentRoute;

}





export function subscribe(callback){


listeners.push(callback);


}





function notify(){


listeners.forEach(

callback=>callback(currentRoute)

);


}





window.addEventListener(

"popstate",

()=>{


const route =

location.hash
.replace("#","")

|| "home";



currentRoute = route;


notify();



}

);
