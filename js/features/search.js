import {
NOTES
}
from "../data/notes.js";




export function searchAll(text){



let result=[];



Object.entries(NOTES)

.forEach(([level,depts])=>{


Object.entries(depts)

.forEach(([dept,subjects])=>{


subjects.forEach(item=>{


if(

item.title
.toLowerCase()
.includes(
text.toLowerCase()
)

){


result.push({

level,

dept,

...item

});


}


});


});


});



return result;



}





export function renderSearch(){


return `


<div class="card">


<h2>
🔎 Search
</h2>


<input

id="global-search"

placeholder="Search subject..."

>



<div id="search-result">

</div>


</div>



`;

}
