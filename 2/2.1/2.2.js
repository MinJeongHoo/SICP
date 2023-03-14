function makePoint(x, y) {
    return [x, y];
}

function xPoint(p) {
    return p[0];
}

function yPoint(p) {
    return p[1];
}

function printPoint(p) {
    console.log(`(${xPoint(p)},${yPoint(p)})`);
    return `(${xPoint(p)},${yPoint(p)})`;
}

function makeSegment(p1, p2) {
    return [p1, p2];
}

function startSegment(s) {
    return s[0];
}

function endSegment(s) {
    return s[1];
}

function printSegment(s) {
    const start = printPoint(startSegment(s));
    const end = printPoint(endSegment(s));
    console.log(`[${printPoint(startSegment(s))},${printPoint(endSegment(s))}]`);
}

function midpointSegment(s) {
    const x = (xPoint(startSegment(s)) + xPoint(endSegment(s))) / 2;
    const y = (yPoint(startSegment(s)) + yPoint(endSegment(s))) / 2;
    return makePoint(x, y);
}

// Tests
const p1 = makePoint(2, 3);
const p2 = makePoint(5, 6);
const s1 = makeSegment(p1, p2);

printPoint(p1);
printSegment(s1);
printPoint(midpointSegment(s1));