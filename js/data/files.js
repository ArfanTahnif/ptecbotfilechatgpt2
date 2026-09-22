export const FILES = [


{
id:"ye101",

subject:"Basic Textile Engineering",

department:"YE",

level:"Level-1 Term-I",


drive:""


},



{
id:"wpe201",

subject:"Dyeing Technology",

department:"WPE",

level:"Level-2 Term-I",


drive:""


}



];





export function findFile(id){


return FILES.find(

item=>item.id===id

);


}
