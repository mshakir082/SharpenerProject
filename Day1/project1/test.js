const name = (arr)=>{
    let i=0;
    return function(){
         console.log("Hello", arr[i]) ;
            i++;
      }
}

let fun = name(["Ram","Shyam"]);

fun()// Print Hello Ram

fun()//print Hello Shyam