export const QBANK = {


"Level-1":[


{

subject:"Engineering Mathematics",

questions:[

"Short questions",

"Previous year questions"

]

}


],




"Level-2":[


{

subject:"Spinning Technology",

questions:[

"MCQ",

"Written questions"

]

}


]



};





export function getQuestionBank(level){

return QBANK[level] || [];

}
