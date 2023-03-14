function pair(x,y){
    return m=>m(x,y);
}

function head(z){
    return z((p,q)=>p);
}

function tail(z){
    return z((p,q)=>q);
}

console.log(head(pair(1,2)));
console.log(tail(pair(1,2)));