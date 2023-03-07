
//a
function contFracRecur(n, d, k) {
    function recur(i) {
        if (k === i) {
            return n(i) / d(i);
        } else {
            return n(i) / (d(i) + recur(i + 1));
        }
    }
    return recur(1);
}

function contFracIter(n, d, k) {
    function iter(i, result) {
        if (i === 0) {
            return result;
        }
        const next = n(i) / (d(i) + result);
        return iter(i - 1, next);
    }
    return iter(k - 1, n(k) / d(k));
}