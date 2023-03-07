function double(f) {
    return function(x) {
        return f(f(x));
    }
}

function inc(x){
    return x+1;
}

console.log();
double(double(double))(inc)(5)
//21