import {
    getLevels,
    getDepartmentNotes
}
from "../data/notes.js";




export function renderNotes(){


const levels =
getLevels();



return `


<section class="hero">

<h1>
📚 Academic Notes
</h1>

<p>
Semester wise textile study materials
</p>

</section>



<div class="grid">


${levels.map(level=>`


<div class="card"
data-level="${level}">


<h3>
${level}
</h3>


<button 
class="btn"
data-action="open-level"
data-level="${level}">

Open

</button>


</div>


`).join("")}



</div>



`;

}





export function renderLevel(level){



return `


<div class="card">


<h2>
${level}
</h2>



${

["YE","FE","WPE","AE"].map(dep=>`


<div class="card">


<h3>
${dep}
</h3>



${

getDepartmentNotes(level,dep)

.map(note=>`

<p>
${note.code}
-
${note.title}
</p>

`).join("")

}


</div>



`).join("")


}



</div>


`;

}
