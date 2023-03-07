function sumIter(term, a, next, b) {
    function iter(a, result) {
        if (a > b) {
            return result;
        }
        return iter(next(a), result + term(a));
    }
    return iter(a, 0);
}