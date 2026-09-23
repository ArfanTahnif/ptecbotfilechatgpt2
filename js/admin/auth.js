import {
save,
load
}
from "../core/storage.js";



const ADMIN_PIN = "1234";




export function login(pin){


if(pin === ADMIN_PIN){


save(
"admin",
{
logged:true
}
);


return true;


}


return false;


}





export function logout(){


save(
"admin",
{
logged:false
}
);


}




export function isAdmin(){


return load(
"admin",
{
logged:false
}
).logged;


}
