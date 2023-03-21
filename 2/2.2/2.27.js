function deep_reverse(items){
    return is_null(items)
        ? null
        : is_pair(items)
            ? append(deep_reverse(tail(items)),
                pair(deep_reverse(head(items)),
                    null))
            : items;
}