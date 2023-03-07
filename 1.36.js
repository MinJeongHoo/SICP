function fixedPoint(f, firstGuess) {
    const tolerance = 0.00001;

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
console.log(fixedPoint(x => Math.log(1000) / Math.log(x), 2));
console.log(fixedPoint((x) => average(x, (Math.log(1000) / Math.log(x))), 2));


