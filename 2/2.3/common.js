// SICP JS 2.3.2

function is_variable(x) { return is_string(x); }

function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2;
}

function is_sum(x) {
    return is_pair(x) && head(x) === "+";
}

function make_sum(a1, a2) { return list("+", a1, a2); }

function make_product(m1, m2) { return list("*", m1, m2); }

function addend(s) { return head(tail(s)); }

function augend(s) { return head(tail(tail(s))); }

function is_product(x) {
    return is_pair(x) && head(x) === "*";
}

function multiplier(s) { return head(tail(s)); }

function multiplicand(s) { return head(tail(tail(s))); }

function deriv(exp, variable) {
    return is_number(exp)
        ? 0
        : is_variable(exp)
            ? is_same_variable(exp, variable) ? 1 : 0
            : is_sum(exp)
                ? make_sum(deriv(addend(exp), variable),
                    deriv(augend(exp), variable))
                : is_product(exp)
                    ? make_sum(make_product(multiplier(exp),
                            deriv(multiplicand(exp),
                                variable)),
                        make_product(deriv(multiplier(exp),
                                variable),
                            multiplicand(exp)))
                    : error(exp, "unknown expression type -- deriv");
}


function is_variable(x) { return is_string(x); }
function is_same_variable(v1, v2) {
    return is_variable(v1) && is_variable(v2) && v1 === v2;
}
function make_sum(a1, a2) { return list("+", a1, a2); }

function make_product(m1, m2) { return list("*", m1, m2); }
function is_sum(x) {
    return is_pair(x) && head(x) === "+";
}
function addend(s) { return head(tail(s)); }
function augend(s) { return head(tail(tail(s))); }
function is_product(x) {
    return is_pair(x) && head(x) === "*";
}
function multiplier(s) { return head(tail(s)); }
function multiplicand(s) { return head(tail(tail(s))); }

deriv(list("*", list("*", "x", "y"), list("+", "x", 3)), "x");

function accumulate(op, initial, sequence) {
    return sequence === null
        ? initial
        : op(head(sequence),
            accumulate(op, initial, tail(sequence)));
}



///tree

function entry(tree) {return head(tree)};
function left_branch(tree){return head(tail(tree))}
function right_branch(tree){return head(tail(tree))}
function make_tree(entry,left,right){
    return list(entry,left,right)
}