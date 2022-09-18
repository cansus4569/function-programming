const log = console.log;

/**
 * 전개 연산자
 */
const a = [1, 2];
const arr = [1, 2, 3];
const set = new Set([1, 2, 3]);
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

log(...a); // 값
log([...a, [3, 4]]); // 2개의 배열
// a[Symbol.iterator] = null; // 에러 발생 : TypeError: a is not iterable
log([...a, ...[3, 4]]); // 하나의 배열로
log(...a, ...arr, ...set, ...map.keys());