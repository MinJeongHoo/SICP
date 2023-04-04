
function addend(s) {
    return head(s);
}
function multiplier(s) {
    return head(s);
}
function is_sum(x) {
    return is_pair(x) && head(tail(x)) === "+";
}

function is_product(x) {
    return is_pair(x) && head(tail(x)) === "*";
}
function make_sum(a1, a2) {
    return number_equal(a1, 0)
        ? a2
        : number_equal(a2, 0)
            ?  a1
            : is_number(a1) && is_number(a2)
                ? a1 + a2
                : list(a1, "+", a2);
}


function make_product(m1, m2) {
    return number_equal(m1, 0) || number_equal(m2, 0)
        ?  0
        : number_equal(m1, 1)
            ? m2
            : number_equal(m2, 1)
                ?  m1
                : is_number(m1) && is_number(m2)
                    ? m1 * m2
                    : list(m1, "*", m2);
}