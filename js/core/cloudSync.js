
import {

save,
load

}

from "./storage.js";





const USER_KEY =
"cloud_user";





export async function syncSave(
collection,
data
){


/*
Future:

Firestore write

*/


save(

collection,

data

);



}




export async function syncLoad(
collection
){



/*
Future:

Firestore read

*/



return load(

collection,

[]

);


}







export function setUser(user){



save(

USER_KEY,

user

);


}





export function getUser(){


return load(

USER_KEY,

null

);


}





export function logoutCloud(){


save(

USER_KEY,

null

);


}
