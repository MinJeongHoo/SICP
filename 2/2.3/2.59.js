function union_set(set1, set2) {
    return is_null(set1)
        ? set2
        : adjoin_set(head(set1),
            union_set(tail(set1), set2));
}