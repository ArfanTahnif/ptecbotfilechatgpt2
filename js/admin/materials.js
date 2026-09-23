
import {

save,
load

}

from "../core/storage.js";





const KEY="materials";





export function getMaterials(){


return load(
KEY,
[]
);


}





export function addMaterial(data){



const list =
getMaterials();



list.push({

id:Date.now(),

...data

});



save(

KEY,

list

);


}





export function exportMaterials(){



const data =
JSON.stringify(
getMaterials(),
null,
2
);



const blob =
new Blob(
[data],
{
type:"application/json"
}
);



const url =
URL.createObjectURL(blob);



const a =
document.createElement("a");


a.href=url;


a.download="ptec-materials-backup.json";


a.click();



}
