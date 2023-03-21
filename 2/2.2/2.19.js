function first_denomination(coin_values) {
    return head(coin_values);
}
function except_first_denomination(coin_values) {
    return tail(coin_values);
}
function no_more(coin_values) {
    return is_null(coin_values);
}

// coin_values ​​목록의 순서는 주어진 목록이 정렬되지 않은 액면가 모음을 나타내기 때문에 문제의 올바른 솔루션이 제공하는 답에 영향을 미치지 않습니다.