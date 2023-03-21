// SICP JS 2.2.2

function square(x) {
    return x * x;
}

// square_tree to be written by student

function square_tree(tree) {
    return is_null(tree)
        ? null
        : ! is_pair(tree)
            ? square(tree)
            : pair(square_tree(head(tree)),
                square_tree(tail(tree)));
}

square_tree(list(1,
    list(2, list(3, 4), 5),
    list(6, 7)));