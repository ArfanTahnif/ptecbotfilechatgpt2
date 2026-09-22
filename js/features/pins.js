import {

save,
load

}

from "../core/storage.js";




const KEY="pins";





export function getPins(){


return load(KEY,[]);


}




export function addPin(item){


let pins=getPins();



pins.push(item);



save(
KEY,
pins
);



}




export function removePin(id){



let pins =
getPins()
.filter(
p=>p.id!==id
);



save(
KEY,
pins
);


}
