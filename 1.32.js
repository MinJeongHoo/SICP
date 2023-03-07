function accumulate(combiner, nullValue, term, a, next, b) {
    if (a > b) {
        return nullValue;
    } else {
        return combiner(term(a),
            accumulate(combiner, nullValue, term, next(a), next, b));
    }
}

function accumulateIter(combiner, nullValue, term, a, next, b) {
    function iter(a, result) {
        if (a > b) {
            return result;
        } else {
            return iter(next(a), combiner(result, term(a)));
        }
    }
    return iter(a, nullValue);
}

function sum(term, a, next, b) {
    return accumulate((x, y) => x + y, 0, term, a, next, b);
}

function sumIter(term, a, next, b) {
    return accumulateIter((x, y) => x + y, 0, term, a, next, b);
}

function product(term, a, next, b) {
    return accumulate((x, y) => x * y, 1, term, a, next, b);
}

function productIter(term, a, next, b) {
    return accumulateIter((x, y) => x * y, 1, term, a, next, b);
}