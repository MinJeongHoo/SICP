function unique_triples(n) {
    return flatmap(i => flatmap(j => map(k => list(i, j, k),
                enumerate_interval(1, j - 1)),
            enumerate_interval(1, i - 1)),
        enumerate_interval(1, n));
}
function plus(x, y) {
    return x + y;
}
function triples_that_sum_to(s, n) {
    return filter(items => accumulate(plus, 0, items) === s,
        unique_triples(n));
}

triples_that_sum_to(10, 6);