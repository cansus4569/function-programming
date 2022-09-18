const log = console.log;

/**
 * 제너레이터/이터레이터
 * - 제너레이터: 이터레이터이자 이터러블을 생성하는 함수
 *      -> 이터레이터를 리턴하는 함수
 */
// 자바스크립트는 어떠한 값이든 이터러블이면 순회 가능!

// 제너레이터는 함수 앞에 '*' 붙여서 정의
// 제너레이터는 순회할 값들을 문장으로 값을 만들어 표현이 가능
function* gen() {
    yield 1;            // 값
    if (false) yield 2; // 문장으로 만든 값
    yield 3;            // 값
    return 100; // done == true 일때 나오는 value 값
}
let iter = gen(); // 이터레이터를 반환
log(iter[Symbol.iterator]);
log(iter[Symbol.iterator]());
log(iter[Symbol.iterator]() == iter); // well-formed-iterator
log(gen().next());// log(iter.next());
log(gen().next());// 순회 위치를 기억하지 않음 (항상 초기 상태)
log(iter[Symbol.iterator]().next()); // log(iter.next()); 호출과 동일
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

// for ... of 문은 { value, done } 객체에서 
// done == true일때 빠져나오기에 출력하지 않음
for (const a of gen()) log(a); 