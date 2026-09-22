export const NOTES = {


    "Level-1 Term-I": {

        YE:[
            {
                code:"YE-101",
                title:"Basic Textile Engineering",
                type:"Theory"
            },

            {
                code:"MAT-101",
                title:"Engineering Mathematics",
                type:"Theory"
            }
        ],


        FE:[
            {
                code:"FE-101",
                title:"Introduction to Fabric Engineering",
                type:"Theory"
            }
        ],


        WPE:[
            {
                code:"WPE-101",
                title:"Textile Chemistry",
                type:"Theory"
            }
        ],


        AE:[
            {
                code:"AE-101",
                title:"Apparel Fundamentals",
                type:"Theory"
            }
        ]

    },






    "Level-1 Term-II":{


        YE:[
            {
                code:"YE-102",
                title:"Yarn Manufacturing Process",
                type:"Theory"
            }
        ],


        FE:[
            {
                code:"FE-102",
                title:"Weaving Technology",
                type:"Theory"
            }
        ]


    },






    "Level-2 Term-I":{


        YE:[
            {
                code:"YE-201",
                title:"Spinning Technology",
                type:"Theory"
            }
        ],


        WPE:[
            {
                code:"WPE-201",
                title:"Dyeing Technology",
                type:"Theory"
            }
        ]

    }






};





export function getLevels(){

return Object.keys(NOTES);

}





export function getDepartmentNotes(level,dept){


return NOTES[level]?.[dept] || [];


}
