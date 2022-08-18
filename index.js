 function receivesAFunction(callback){

     callback();
 }


  const returnsANamedFunction=()=>{
    return function namedFunction(){

    }
}
function returnsAnAnonymousFunction(){
    return function(){
        
    }
}

