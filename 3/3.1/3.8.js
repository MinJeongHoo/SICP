function make_f(init) {
    return x => {
        init = x - init;
        return init;
    };
}