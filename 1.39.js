function contFracIter(n, d, k) {
    function iter(i, result) {
        if (i === 0) {
            return result;
        } else {
            return iter(i - 1, n(i) / (d(i) + result));
        }
    }
    return iter(k - 1, n(k) / d(k));
}

function tanCf(x, k) {
    return contFracIter(
        (i) => {
            if (i === 1) {
                return x;
            } else {
                return x * x * -1;
            }
        },
        (i) => {
            return 2 * i - 1;
        },
        k
    );
}

// check result
const x = 1;
console.log(tanCf(x, 8));
console.log(Math.tan(x));