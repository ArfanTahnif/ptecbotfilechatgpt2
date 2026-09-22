export const NOTICES=[


{

id:1,

title:
"Semester Examination Routine",

date:
"2026-01-01",

category:
"Exam"

},



{

id:2,

title:
"Holiday Notice",

date:
"2026-02-01",

category:
"Notice"

}



];





export function latestNotices(){


return NOTICES.slice(0,5);


}
