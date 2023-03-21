function for_each(f, items) {
    if (is_null(items)){
        return undefined;
    } else {
        f(head(items));
        for_each(f, tail(items));
    }
}