function sum(term, a, next, b) {
    if (a > b) {
        return 0;
    } else {
        return term(a) + sum(term, next(a), next, b);
    }
}

function integral(f, a, b, dx) {
    function add_dx(x) { return x + dx; }
    return sum(f, a + dx / 2.0, add_dx, b) * dx;
}

function integral_simpson(f, a, b, n) {
    const h = (b - a) / n;
    function add_2h(x) { return x + h + h; }
    return (
        f(a) +
        2 * sum(f, a, add_2h, b) +
        4 * sum(f, a + h, add_2h, b) +
        f(b)
    ) * (h / 3);
}

function cube(x) {
    return x * x * x;
}

console.log(integral(cube,0,1,0.01));
console.log(integral(cube,0,1,0.001));
console.log(integral_simpson(cube,0,1.0,100));
console.log(integral_simpson(cube,0,1.0,1000));

//integral-simpson 더 정확한 결과값을 준다.
