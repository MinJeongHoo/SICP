function reverse(items) {
    function reverse_iter(items, result) {
        return is_null(items)
            ? result
            : reverse_iter(tail(items),
                pair(head(items), result));
    }
    return reverse_iter(items, null);
}
// [1,[2,[3,[4,null]]]]



function reverse(items) {
    return is_null(items)
        ? null
        : append(reverse(tail(items)),
            pair(head(items), null));
}

//1. [2,[3,[4,null]]]] , [1,null]
//2. [3,[4,null]] ,    [2,null]
//3. [4,null] , [3,null]
//4. 4         [4,null]

