function divInterval2(x, y) {
    if ((0 < lowerBound(x) && 0 > upperBound(x)) ||
        (0 > lowerBound(x) && 0 < upperBound(x)) ||
        (0 < lowerBound(y) && 0 > upperBound(y)) ||
        (0 > lowerBound(y) && 0 < upperBound(y))) {
        throw new Error("One or more interval crossing zero.");
    } else {
        const invertedY = makeInterval(1 / upperBound(y), 1 / lowerBound(y));
        return mulInterval(x, invertedY);
    }
}