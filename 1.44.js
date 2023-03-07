function smooth(f) {
    return function(x) {
        const dx = 0.00001;
        return (f(x - dx) + f(x) + f(x + dx)) / 3;
    }
}

function repeated(f, n) {
    if (n === 1) {
        return f;
    } else {
        return function(x) {
            return f(repeated(f, n - 1)(x));
        }
    }
}

function smoothNth(f, n) {
    return repeated(smooth, n)(f);
}