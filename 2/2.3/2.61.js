function adjoin_set(x, set) {
    return is_null(set)
        ? list(x)
        : x === head(set)
            ? set
            : x < head(set)
                ? pair(x, set)
                : pair(head(set),
                    adjoin_set(x, tail(set)));
}