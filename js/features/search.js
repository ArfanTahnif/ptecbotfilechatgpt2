import {
NOTES
}
from "../data/notes.js";





export function searchAll(keyword){


if(!keyword)
return [];



keyword =
keyword.toLowerCase();



let results=[];



Object.entries(NOTES)

.forEach(([level,depts])=>{


Object.entries(depts)

.forEach(([dept,subjects])=>{


subjects.forEach(subject=>{


if(

subject.title
.toLowerCase()
.includes(keyword)

||

subject.code
.toLowerCase()
.includes(keyword)

){


results.push({

level,

department:dept,

...subject


});


}



});


});


});



return results;



}







export function renderSearch(){



return `


<section class="hero">


<h1>
🔎 Search
</h1>


<p>
Find notes, subjects and materials
</p>


</section>




<div class="card">


<input

id="search-input"

placeholder="Search subject/code..."

>



<div id="search-output">


<p>
Start typing...

</p>


</div>


</div>


`;

}
