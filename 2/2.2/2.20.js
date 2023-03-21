function plus_curried(x){
    return y => x+y;
}

function brooks(f,list){
    return f(head(list))(tail(list));
}

