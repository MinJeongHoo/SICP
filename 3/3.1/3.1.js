function  make_accumulator(num){
    return function(newNum){
        return num + newNum;
    }
}

