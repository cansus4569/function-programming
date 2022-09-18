const log = console.log;

/**
 * Array를 통해 알아보기
 */
log('Arr ----------');
const arr = [1, 2, 3];
// let iter1 = arr[Symbol.iterator]();
// iter1.next();
// for (const a of iter1) log(a);
for (const a of arr) log(a);
/**
 * Set을 통해 알아보기
 */
log('Set ----------');
const set = new Set([1, 2, 3]);
// let iter2 = set[Symbol.iterator]();
// iter2.next();
// iter2.next();
// for (const a of iter2) log(a);
for (const a of set) log(a);
/**
 * Map을 통해 알아보기
 */
log('Map ----------');
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// let iter3 = map[Symbol.iterator]();
// iter3.next();
// iter3.next();
// iter3.next();
// for (const a of iter3) log(a);
for (const a of map) log(a);

var a = map.keys(); // 이터레이터 리턴
log(a.next()); // 키 값을 value에 담아 { value, done } 객체를 리턴

for (const a of map.keys()) log(a);     // key 만 뽑음
for (const a of map.values()) log(a);   // value 만 뽑음
for (const a of map.entries()) log(a);  // { key, value } 뽑음

var iter4 = map.values();
log(iter4[Symbol.iterator]);

var iter5 = iter4[Symbol.iterator]();
log(iter5.next());
log(iter5.next());
log(iter5.next());

/**
 * 이터러블/이터레이터 프로토콜
 * - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
 * - 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
 * - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
 */
log('Protocol ----------');
// 이터러블 : arr(배열) 
let iterator = arr[Symbol.iterator]();
log(arr[Symbol.iterator]);
log(arr[Symbol.iterator]());

// 이터레이터 : iterator 는 next 메서드를 가짐
log(iterator.next());
log(iterator.next());
log(iterator.next());
log(iterator.next());