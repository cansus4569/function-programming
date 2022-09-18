const log = console.log;

/**
 * odds
 * 제너레이터를 활용하여 홀수만 출력
 */
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
let iter = odds(10);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for (const a of odds(40)) log(a)