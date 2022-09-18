const log = console.log;

/**
 * 일급 함수
 * 함수가 값으로 다뤄질 수 있다.
 */

const add5 = a => a + 5;
log(add5);
log(add5(5));

const f1 = () => (() => 1);
log(f1());

const f2 = f1();
log(f2);
log(f2());