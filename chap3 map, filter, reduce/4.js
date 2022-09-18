const log = console.log;

/**
 * reduce 1
 * - 값을 축약하는 함수
 * - 이터러블 값을 하나의 값으로 축약해 나가는 함수
 */
const nums = [1, 2, 3, 4, 5];

let total = 0;
for (const n of nums) {
    total = total + n;
}
log(total);

const reduce = (f, acc, iter) => {
    if (!iter) { // acc option 화
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
};

const add = (a, b) => a + b;

log(reduce(add, 0, [1, 2, 3, 4, 5])); // 15 

log(add(add(add(add(add(0, 1), 2), 3), 4), 5)); // 15

log(reduce(add, [1,2,3,4,5])); // 15

/**
 * reduce 2
 */
const products = [ // Array
    { name: '반팔티', price: 150 }, // Object
    { name: '긴팔티', price: 200 },
    { name: '면바지', price: 150 },
    { name: '니트', price: 300 },
    { name: '청바지', price: 250 },
];

log(reduce((total_price, product) => total_price + product.price, 0, products));