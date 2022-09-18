const log = console.log;

/**
 * 사용자 정의 이터러블을 통해 알아보기
 */
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i == 0 ? { value: undefined, done: true } : { value: i--, done: false };
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
};
let iterator = iterable[Symbol.iterator]();
log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
for (const a of iterator) log(a);

const arr = [1, 2, 3];
// for (const a of arr) log(a);
let iter2 = arr[Symbol.iterator]();
// iter2.next();
log(iter2[Symbol.iterator]() == iter2); // well-formed iterator
for (const a of iter2) log(a);

/*
for (const a of document.querySelectorAll('*')) log(a);
const all = document.querySelectorAll('*');
log(all); // NodeList
let iter3 = all[Symbol.iterator]();
log(iter3.next());
log(iter3.next());
log(iter3.next());
*/