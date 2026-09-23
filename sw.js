
const CACHE_NAME =
"ptec-notebot-v1.0";



const FILES = [


"./",

"./index.html",

"./css/variables.css",

"./css/base.css",

"./css/components.css",

"./css/layout.css",

"./css/animations.css",

"./css/mobile.css",

"./js/app.js"


];





self.addEventListener(

"install",

event=>{


event.waitUntil(


caches.open(
CACHE_NAME
)

.then(
cache=>

cache.addAll(
FILES
)

)


);



});







self.addEventListener(

"activate",

event=>{


event.waitUntil(


caches.keys()

.then(

keys=>

Promise.all(

keys.map(

key=>{


if(
key!==CACHE_NAME
){

return caches.delete(
key
);

}


}

)

)


)


);


});









self.addEventListener(

"fetch",

event=>{


event.respondWith(


caches.match(
event.request
)

.then(

cached=>


cached ||

fetch(
event.request
)


)


);


});
