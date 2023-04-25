let num = 2;
function rand(symbol){
    const fn = route[symbol];
    return fn();
}

const route = {
    reset : resetFunc,
    generate :generateFunc
}
function generateFunc(){
    num = (num * 1010) % 1101;
    return num;
}
function resetFunc(){
    return function(new_num){
        num = new_num;
    }
}

console.log(rand('generate'));
console.log(rand('generate'));
console.log(rand('generate'));
rand("reset")(2);