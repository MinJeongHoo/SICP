//유리수 산술 연산

/**
 * make_rat(n,d) 분자가 정수 n이고 분모가 정수 d인 유리수를 돌려준다.
 * number(x) 유리수 x의 분자를 돌려준다.
 * denom(x) 유리수 x의 분모를 돌려준다.
 * */

function make_rat(n,d) {
    return pair(n,d);
}

function number(x){
    return head(x);
}

function denom(x){
    return tail(x);
}

function add_rat(x,y){
    return make_rat(number(x)*denom(y)+number(y)*denom(x),denom(x)*denom(y));
}

function sub_rat(x,y){
    return make_rat(number(x)*denom(y) - number(y)*denom(x),denom(x)*denom(y));
}

function mul_rat(x,y){
    return make_rat(number(x)*number(y),denom(x)*denom(y));
}

function div_rat(x,y){
    return make_rat(number(x)*denom(y),denom(x)*number(y));
}

function equal_rat(x,y){
    return number(x) * denom(y)===number(y)*denom(x);
}