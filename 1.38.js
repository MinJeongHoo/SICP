function contFracIter(n, d, k) {
    function iter(i, result) {
        if (i === 0) {
            return result;
        }
        return iter(i - 1, n(i) / (d(i) + result));
    }
    return iter(k - 1, n(k) / d(k));
}

function dEuler(i) {
    if (i % 3 === 2) {
        return 2 * ((i + 1) / 3);
    }
    return 1;
}

function displaySerie(f, n) {
    function rec(i) {
        process.stdout.write(f(i) + ", ");
        if (i === n) {
            process.stdout.write("\n");
        } else {
            rec(i + 1);
        }
    }
    rec(1);
}

displaySerie(dEuler, 12);

// exact result is 0.718281828459
console.log(contFracIter(i => 1.0, dEuler, 1));