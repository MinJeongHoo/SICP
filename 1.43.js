function square(x) {
    return x * x;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
    }
}

function repeated(f, n) {
    if (n === 1) {
        return f;
    } else {
        return compose(f, repeated(f, n - 1));
    }
}

console.log(repeated(square, 2)(5));