const log = console.log;

function* infinity(i = 0) {
    while (true) yield i++;
}
function* limit(l, iter) {
    for (const a of iter) {
        yield a;
        if (a == l) return;
    }
}
function* odds(l) {
    for (const a of limit(l, infinity(1))) {
        if (a % 2) yield a;
    }
}
/**
 * for ... of, 전개 연산자, 구조 분해, 나머지 연산자
 */
// 전개 연산자
log(...odds(10));   // 1 3 5 7 9
log([...odds(10), ...odds(20)]); // [ 1, 3, 5, 7, 9, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

// 구조 분해
const [head, ...tail] = odds(5);
log(head); // 1
log(tail); // [ 3, 5 ]

// 나머지 연산자 (rest)
const [a, b, ...rest] = odds(10);
log(a); // 1
log(b); // 3
log(rest); // [ 5, 7, 9 ]