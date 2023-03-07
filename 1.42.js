function compose(square,inc){
    return function(x){
        return square(inc(x));
    }
}

function square(x){
    return x * x;
}

