const tolerance = 0.00001;

function fixedPoint(f, firstGuess) {
    function closeEnough(v1, v2) {
        return Math.abs(v1 - v2) < tolerance;
    }
    function tryGuess(guess) {
        const next = f(guess);
        if (closeEnough(guess, next)) {
            return next;
        }
        return tryGuess(next);
    }
    return tryGuess(firstGuess);
}

console.log(fixedPoint(x => 1 + 1 / x, 1.0));