function make_monitored(math_sqrt){
    let callCount = 0;
    return function(param){
        if(typeof param ==='number'){
            callCount+=1;
            return math_sqrt(param);
        }
        else{
            return callCount
        }
    }
}