const log = console.log;

const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
};
/**
 * 이터러블 프로토콜을 따른 map의 다형성 1
 */

log([1, 2, 3].map(a => a + 1)); // [ 2, 3, 4 ]

/**
 * document 는 브라우저 API 이므로 node 에서는 동작 안함 
 * 테스트 시 html 작성하여 개발자 도구 console 에서 확인하기
 * 주석 처리 함
 */
/* 
log(document.querySelectorAll('*')); // NodeList (이터러블 프로토콜을 준수함)
// prototype 에 map 함수가 구현이 안됨 (document 객체는 Array 상속 받지 않음)
log(document.querySelectorAll('*').map(el => el.nodeName)); // TypeError: .map is not a function
log(document.querySelectorAll('*').map); // undefined

log(map(el => el.nodeName, document.querySelectorAll('*'))); 

const it = document.querySelectorAll('*')[Symbol.iterator]();
log(it);
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
*/

function* gen() {
    yield 2;
    if (false) yield 3;
    yield 4;
}
log(map(a => a * a, gen())); // [4 , 16]

/**
 * 이터러블 프로토콜을 따른 map의 다형성 2
 */
let m = new Map();
m.set('a', 10);
m.set('b', 20);
const it = m[Symbol.iterator]();
log(it.next());
log(it.next());
log(it.next());
log(map(([k, v]) => [k, v * 2], m));
log(new Map(map(([k, v]) => [k, v * 2], m)));