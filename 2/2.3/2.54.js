function equal(xs,ys){
    return is_list(xs)
        ? (is_list(ys) &&
            equal(head(xs), head(ys)) &&
            equal(tail(xs), tail(ys)))
        : xs === null
            ? ys === null
            : typeof xs === "number"
                ? (typeof ys ==='number' && xs === ys)
                : typeof xs ==='boolean'
                    ? (typeof ys ==='bolean' && ((xs && ys) || (!xs && !ys)))
                    : typeof xs ==='string'
                        ? (typeof ys === ' string' && xs === ys)
                        : xs === undefined
                            ? ys === undefined
                            : // we know now that xs is a function
                            (typeof ys ==='function' && xs === ys);
}

