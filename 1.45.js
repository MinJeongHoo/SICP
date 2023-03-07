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

function power(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * power(x, n - 1);
    }
}

function nthRootDamped(x, nth, damp) {
    function averageDamp(f) {
        return function(x) {
            return (x + f(x)) / 2;
        }
    }

    return fixedPoint(
        repeated(averageDamp, damp)(
            function(y) {
                return x / power(y, nth - 1);
            }
        ),
        1.0
    );
}