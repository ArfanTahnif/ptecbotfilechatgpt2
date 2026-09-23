
let firebaseApp = null;

let firestore = null;

let auth = null;




export async function initFirebase(){


/*
 Firebase config এখানে বসবে

 Example:

 const firebaseConfig={
    apiKey:"",
    authDomain:"",
    projectId:""
 }

*/


console.log(
"Firebase initialized"
);



}





export function getFirebase(){


return {

firebaseApp,

firestore,

auth

};


}
