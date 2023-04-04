function lookup(given_key, tree_of_records) {
    if (is_null(tree_of_records)) {
        return null;
    } else {
        const this_entry = entry(tree_of_records);
        const this_key = key(this_entry);
        return given_key === this_key
            ? this_entry
            : given_key < this_key
                ? lookup(given_key,
                    left_branch(tree_of_records))
                : lookup(given_key,
                    right_branch(tree_of_records));
    }
}

const my_fav_planets =
    make_tree(make_record(4, "Mars"),
        make_tree(make_record(2, "Venus"),
            null,
            make_tree(make_record(3, "Earth"),
                null, null)),
        make_tree(make_record(6, "Saturn"),
            make_tree(make_record(5, "Jupiter"),
                null, null),
            null));

lookup(3, my_fav_planets);