function last_pair(items){
    return is_null(tail(items)) ? items : last_pair(tail(items));
}