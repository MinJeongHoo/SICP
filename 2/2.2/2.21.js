function square_list(items) {
    return is_null(items)
        ? null
        : pair(square(head(items)),
            square_list(tail(items)));
}
function square_list(items) {
    return map(square, items);
}
