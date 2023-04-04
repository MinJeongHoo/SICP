function tree_to_list_1(tree) {
    return is_null(tree)
        ? null
        : append(tree_to_list_1(left_branch(tree)),
            pair(entry(tree),
                tree_to_list_1(right_branch(tree))));
}

function tree_to_list_2(tree) {
    function copy_to_list(tree, result_list) {
        return is_null(tree)
            ? result_list
            : copy_to_list(left_branch(tree),
                pair(entry(tree),
                    copy_to_list(right_branch(tree),
                        result_list)));
    }
    return copy_to_list(tree, null);
}



//(1,3,5,7,9,11)