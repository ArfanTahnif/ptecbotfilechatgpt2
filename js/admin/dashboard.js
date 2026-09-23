
import {

login,
isAdmin

}

from "./auth.js";


import {

addMaterial,
getMaterials,
exportMaterials

}

from "./materials.js";







export function renderAdmin(){



if(!isAdmin()){


return `


<div class="card">


<h2>
🔐 Admin Login
</h2>



<input

id="admin-pin"

type="password"

placeholder="Enter PIN"


>


<button

class="btn"

data-action="admin-login">

Login

</button>



</div>


`;



}





return `



<section class="hero">


<h1>
Admin Dashboard
</h1>


<p>
Manage PTEC content
</p>


</section>





<div class="card">


<h3>
Add Material
</h3>



<input

id="material-title"

placeholder="Subject Name"

>



<input

id="material-url"

placeholder="Google Drive URL"

>



<button

class="btn"

data-action="save-material">

Save

</button>



</div>






<div class="card">


<h3>
Current Materials
</h3>



${

getMaterials()

.map(m=>`

<p>
${m.title}
</p>

`).join("")

}


</div>





<button

class="btn"

data-action="export-material">

Export Backup

</button>



`;

}
