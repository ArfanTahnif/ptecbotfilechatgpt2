export const CONTACTS=[


{


name:"Department Teacher",

category:"Teacher",

phone:""


},



{


name:"Academic Office",

category:"Staff",

phone:""


},



{


name:"Campus Support",

category:"Support",

phone:""


}



];






export function searchContact(text){


return CONTACTS.filter(

item=>

item.name
.toLowerCase()
.includes(
text.toLowerCase()
)

);


}
