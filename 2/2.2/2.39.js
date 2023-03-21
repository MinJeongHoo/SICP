
reverse(list(1, 4, 5, 9, 16, 25));
// same as accumulate
const fold_right = accumulate;

function reverse(sequence) {
    return fold_right((x, y) => append(y, list(x)),
        null, sequence);
}

reverse(list(1, 4, 5, 9, 16, 25));

function fold_left(op, initial, sequence) {
    function iter(result, rest) {
        return is_null(rest)
            ? result
            : iter(op(result, head(rest)),
                tail(rest));
    }
    return iter(initial, sequence);
}

function reverse(sequence) {
    return fold_left((x, y) => pair(y, x), null, sequence);
}

reverse(list(1, 4, 5, 9, 16, 25));