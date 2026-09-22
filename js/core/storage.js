const PREFIX = "ptec_";



export function save(key,value){

    try{

        localStorage.setItem(

            PREFIX + key,

            JSON.stringify(value)

        );


    }
    catch(error){

        console.warn(
            "Storage error",
            error
        );

    }

}





export function load(key, fallback=null){


    try{


        const data =
            localStorage.getItem(
                PREFIX + key
            );


        return data
            ? JSON.parse(data)
            : fallback;


    }

    catch(error){


        return fallback;


    }


}






export function remove(key){


    localStorage.removeItem(
        PREFIX + key
    );


}





export function clearAll(){


    Object.keys(localStorage)

    .filter(
        k=>k.startsWith(PREFIX)
    )

    .forEach(
        k=>localStorage.removeItem(k)
    );


}
