const log = console.log;

const products = [ // Array
    { name: '반팔티', price: 150 }, // Object
    { name: '긴팔티', price: 200 },
    { name: '면바지', price: 150 },
    { name: '니트', price: 300 },
    { name: '청바지', price: 250 },
];
/**
 * map
 */
// map 함수 추상화된 로직
// 대충 이런식의 느낌으로 동작한다.
const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
};
// let names = [];
// for (const p of products) {
//     names.push(p.name);
// }
// log(names);
log(map(p => p.name, products));

// let prices = [];
// for (const p of products) {
//     prices.push(p.price);
// }
// log(prices);
log(map(p => p.price, products));