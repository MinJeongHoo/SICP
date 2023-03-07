function product(term, a, next, b) {
    if (a > b) {
        return 1;
    } else {
        return term(a) * product(term, next(a), next, b);
    }
}
function identity(x) {
    return x;
}

function inc(n) {
    return n + 1;
}
function factorial(n) {
    return product(identity, 1, inc, n);
}
console.log(factorial(5));


//b
function productIter(term, a, next, b) {
    function iter(a, result) {
        if (a > b) {
            return result;
        } else {
            return iter(next(a), term(a) * result);
        }
    }
    return iter(a, 1);
}


function wallisProduct(n) {
    function term(i) {
        return ((2 * i) / (2 * i - 1)) * ((2 * i) / (2 * i + 1));
    }
    return product(term, 1.0, inc, n);
}
