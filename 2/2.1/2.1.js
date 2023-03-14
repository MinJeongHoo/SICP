function numer(x) {
    return x;
}

function denom(x) {
    return x;
}

function printRat(x) {
    console.log(`${numer(x[0])}/${denom(x[1])}`);
}

function makeRat(n, d) {
    const g = gcd(n, d);
    const denomSign = d > 0 ? 1 : -1;
    return [((n / g) * denomSign), ((d / g) * denomSign)];
}

function gcd(a, b) {
    if (b === 0) {
        return Math.abs(a);
    }
    return gcd(b, a % b);
}

// Tests
printRat(makeRat(-2, -4));
printRat(makeRat(-2, 4));