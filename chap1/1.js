const log = console.log;

/**
 * 기존과 달라진 ES6에서의 리스트 순회
 * - for i++ (ES5)
 * - for of  (ES6)
 */

const list = [1, 2, 3]; // 배열
const str = 'abc';      // 유사 배열
// ES5
for(var i = 0; i< list.length; i ++) {
    log(list[i]);
}
for(var i = 0; i < str.length; i++) {
    log(str[i]);
}

// ES6
for (const a of list) {
    log(a);
}
for (const a of str) {
    log(a);
}