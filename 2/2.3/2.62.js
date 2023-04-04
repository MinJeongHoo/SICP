function union_set(set1, set2) {
    if (is_null(set1)) {
        return set2;
    } else if (is_null(set2)) {
        return set1;
    } else {
        const x1 = head(set1);
        const x2 = head(set2);
        return x1 === x2
            ? pair(x1, union_set(tail(set1),
                tail(set2)))
            : x1 < x2
                ? pair(x1, union_set(tail(set1), set2))
                : pair(x2, union_set(set1, tail(set2)));
    }
}

// 1. null check를 해서 null일 경우 비교군의 객체를 리턴
// 2. 인수 맨앞에 있는 값들을 비교 후 같다면 작다면 으로해서 비교 후 재귀 호출