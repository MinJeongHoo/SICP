const tolerance = 0.00001;

function average(a, b) {
    return (a + b) / 2;
}

function fixedPoint(f, firstGuess) {
    function closeEnough(v1, v2) {
        return Math.abs(v1 - v2) < tolerance;
    }

    function tryGuess(guess) {
        console.log(guess);
        const next = f(guess);
        return closeEnough(guess, next) ? next : tryGuess(next);
    }

    return tryGuess(firstGuess);
}

const dx = 0.00001;

function deriv(g) {
    return function(x) {
        return (g(x + dx) - g(x)) / dx;
    };
}

function newtonTransform(g) {
    return function(x) {
        return x - g(x) / deriv(g)(x);
    };
}

function newtonsMethod(g, guess) {
    return fixedPoint(newtonTransform(g), guess);
}

function cubic(a, b, c) {
    return function(x) {
        return x ** 3 + a * x ** 2 + b * x + c;
    };
}

const a = 1;
const b = 1;
const c = 1;

console.log(newtonsMethod(cubic(a, b, c), 1));