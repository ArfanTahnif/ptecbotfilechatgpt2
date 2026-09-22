import {

CONTACTS

}

from "../data/contacts.js";





export function renderPhonebook(){



return `



<section class="hero">

<h1>
☎ Phonebook
</h1>

</section>




<div>


${

CONTACTS.map(c=>`


<div class="card">


<h3>

${c.name}

</h3>


<p>
${c.category}
</p>



<a href="tel:${c.phone}"
class="btn">

Call

</a>



</div>



`).join("")

}



</div>



`;

}
