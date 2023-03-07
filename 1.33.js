function filtered_accumulate(predicate, combiner, null_value, term, a, next, b) {
    if (a > b) {
        return null_value;
    } else {
        const current = predicate(a) ? term(a) : null_value;
        return combiner(current, filtered_accumulate(predicate, combiner, null_value, term, next(a), next, b));
    }
}
function sum_of_squares_prime(a, b) {
    function prime(n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    return filtered_accumulate(prime, (x, y) => x + y, 0, x => x * x, a, x => x + 1, b);
}

function relative_prime(i, n) {
    return gcd(i, n) === 1;
}

function product_of_relative_prime(n) {
    return filtered_accumulate(i => relative_prime(i, n), (x, y) => x * y, 1, identity, 1, x => x + 1, n);
}

function identity(x) {
    return x;
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}





