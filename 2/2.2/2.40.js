function square(x) {
    return x * x;
}
function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}
function is_prime(n) {
    return n === smallest_divisor(n);
}


function flatmap(f,seq){
    return accumulate(append,null,map(f,seq));
}

function is_prime_sum(pair){
    return is_prime(head(pair) + head(tail(pair)));
}

function make_pair_sum(pair){
    return list(head(pair), head(tail(pair)) , head(pair)+head(tail(pair)));
}

function accumulate(op, initial, sequence) {
    return sequence === null
        ? initial
        : op(head(sequence),
            accumulate(op, initial, tail(sequence)));
}

function enumerate_interval(low, high) {
    return low > high
        ? null
        : pair(low,
            enumerate_interval(low + 1, high));
}

// function prime_sum_pairs(n) {
//     return map(make_pair_sum,
//         filter(is_prime_sum,
//             flatmap(i => map(j => list(i, j),
//                     enumerate_interval(1, i - 1)),
//                 enumerate_interval(1, n))));
// }


function pair(a,b){
    return [a,b];
}

function head(list){
    return list[0];
}

function tail(list){
    return list[1];
}

function list(...args) {
    if (args.length === 0) {
        return null;
    } else {
        const firstElement = args[0];
        const restElements = args.slice(1);
        return [firstElement, list(...restElements)];
    }
}

export function filter(predicate,sequence){
    return sequence === null
        ? null : predicate(head(sequence))
            ? pair(head(sequence),filter(predicate,tail(sequence))):
        filter(predicate,tail(sequence))
}


function legth(items){
    return items === null ? 0 : 1+length(tail(items));
}

function list_ref(items,n){
    return n===0? head(items) : list_ref(tail(items),n-1);
}

function append(list1,list2){
    return list1 === null ? list2 : pair(head(list1) , append(tail(list1),list2));
}

const one_through_four = list(1,2,3,4);
// console.log(JSON.stringify(one_through_four));
// console.log(JSON.stringify(head(one_through_four)));
// console.log(JSON.stringify(tail(one_through_four)));
// console.log(JSON.stringify(head(tail(one_through_four))));
// console.log(pair(10,one_through_four));
function map(fun,items){
    return items === null ? null : pair(fun(head(items)), map(fun,tail(items)));
}

function prime_sum_pairs(n) {
    return map(make_pair_sum,
        filter(is_prime_sum,
            flatmap(i => map(j => list(i, j),
                    enumerate_interval(1, i - 1)),
                enumerate_interval(1, n))));
}

console.log(JSON.stringify(prime_sum_pairs(6)));

// console.log(JSON.stringify(enumerate_interval(1,6)));
// // console.log(JSON.stringify(accumulate(append,
// //     null,
// //     map(i=>map(j=>list(i,j),
// //         enumerate_interval(1,i-1))
// //         ,enumerate_interval(1,6)))));
// console.log(JSON.stringify(map(i=>map(j=>list(i,j),
//         enumerate_interval(1,i-1))
//     ,enumerate_interval(1,6))));

function unique_pairs(n) {
    return flatmap(i => map(j => list(i, j),
            enumerate_interval(1, i - 1)),
        enumerate_interval(1, n));
}
function prime_sum_pairs(n) {
    return map(make_pair_sum,
        filter(is_prime_sum,
            unique_pairs(n)));
}