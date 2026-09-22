let currentRoute="home";



const listeners=[];




export function navigate(route){



currentRoute=route;



history.pushState(

{
route
},

"",
"#"+route

);



renderRoute();



}






export function getRoute(){

return currentRoute;

}





export function onRouteChange(fn){

listeners.push(fn);

}





export function renderRoute(){



listeners.forEach(

fn=>fn(currentRoute)

);


}





window.addEventListener(

"popstate",

()=>{


const route =
location.hash
.replace("#","")
||
"home";


currentRoute=route;


renderRoute();



}

);
