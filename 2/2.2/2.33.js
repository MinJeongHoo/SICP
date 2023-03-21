function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y),
        null,
        sequence);
}
function append(seq1, seq2) {
    return accumulate(pair, seq2, seq1);
}
function length(sequence) {
    return accumulate((x, y) => y + 1,
        0,
        sequence);
}

map(math_sqrt, list(1, 2, 3, 4));
// append(list(1, 2, 3), list(4, 5, 6));
// length(list(1, 2, 3, 4));