const log = console.log;

/**
 * 고차 함수
 * - 함수를 값으로 다루는 함수
 */

// 함수를 인자로 받아서 실행하는 함수
const apply1 = f => f(1);
const add2 = a => a + 2;
log(apply1(add2)); // 3
log(apply1(a => a - 1)); // 0

const times = (f, n) => {
    let i = -1;
    while (++i < n) f(i);
};

times(log, 3);
times(a => log(a + 10), 3);

// 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
const addMaker = a => b => a + b;
const add10 = addMaker(10); // a 값이 클로저
log(add10(5));
log(add10(10));

// test