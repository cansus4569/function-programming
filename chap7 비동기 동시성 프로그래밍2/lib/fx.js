const log = console.log;

const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const isIterable = a => a && a[Symbol.iterator];

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

const reduceF = (acc, a, f) =>
    a instanceof Promise ?
        a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
        f(acc, a);

const head = iter => go1(take(1, iter), ([h]) => h);

const reduce = curry((f, acc, iter) => {
    if (!iter) return reduce(f, head(iter = acc[Symbol.iterator]()), iter);

    iter = iter[Symbol.iterator]();
    return go1(acc, function recur(acc) {
        let cur;
        while (!(cur = iter.next()).done) {
            acc = reduceF(acc, cur.value, f); // 수정
            if (acc instanceof Promise) return acc.then(recur);
        }
        return acc;
    });
});

const go = (...args) => reduce((a, f) => f(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const take = curry((l, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    return function recur() { // return으로 수정 재귀 호출을 위해
        let cur;
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            /****** 수정된 부분 Start */
            if (a instanceof Promise) { // a 값이 promise
                return a
                    .then(a => (res.push(a), res).length == l ? res : recur())
                    .catch(err => err == nop ? recur() : Promise.reject(err)); // err이 의도한 nop이면 다음 재귀 호출
            }
            /****** 수정된 부분 End */
            res.push(a);
            if (res.length == l) return res;
        }
        return res;
    }(); // 재귀 호출을 위해 즉시 실행
});

const takeAll = take(Infinity);

const L = {};

L.range = function* (l) {
    let i = -1;
    while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
    for (const a of iter) {
        yield go1(a, f); // Promise 입력값 처리하기 위해 수정
    }
});

const nop = Symbol('nop');

L.filter = curry(function* (f, iter) {
    for (const a of iter) {
        // 기존
        // if (f(a)) yield a;
        // 프로미스 처리를 위한 수정
        const b = go1(a, f);
        if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop));
        else if (b) yield a;
    }
});

L.entries = function* (obj) {
    for (const k in obj) yield [k, obj[k]];
};

L.flatten = function* (iter) {
    for (const a of iter) {
        if (isIterable(a)) yield* a;
        else yield a;
    }
};

L.deepFlat = function* f(iter) {
    for (const a of iter) {
        if (isIterable(a)) yield* f(a);
        else yield a;
    }
};

L.flatMap = curry(pipe(L.map, L.flatten));

const map = curry(pipe(L.map, takeAll));

const filter = curry(pipe(L.filter, takeAll));

const find = curry((f, iter) => go(
    iter,
    L.filter(f),
    take(1),
    ([a]) => a));

const flatten = pipe(L.flatten, takeAll);

const flatMap = curry(pipe(L.map, flatten));

var add = (a, b) => a + b;

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
        res.push(i);
    }
    return res;
};