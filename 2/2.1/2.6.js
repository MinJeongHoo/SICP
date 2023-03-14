const zero = f => x => x;

const zero1 = function(){
    return function(x){
        return x
    }
}


function add_1(n) {
    return f => x => f(n(f)(x));
}

//
// const one = f => x => f(x);
// const two = f => x => f(f(x));
//
// function plus(n, m) {
//     return f => x => n(f)(m(f)(x));
// }
//
// // testing
//
// const three = plus(one, two);
//
// function church_to_number(c) {
//     return c(n => n + 1)(0);
// }
// console.log(church_to_number(three));


console.log(zero()(1));