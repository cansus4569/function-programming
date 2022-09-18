const log = console.log;

const products = [ // Array
    { name: '반팔티', price: 150 }, // Object
    { name: '긴팔티', price: 200 },
    { name: '면바지', price: 150 },
    { name: '니트', price: 300 },
    { name: '청바지', price: 250 },
];
/**
 * filter
 */
const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) res.push(a);
    }
    return res;
};
// let under200 = [];
// for (const p of products) {
//     if (p.price < 200) under200.push(p);
// }
// log(...under200);
log(...filter(p => p.price < 200, products));

// let over200 = [];
// for (const p of products) {
//     if (p.price >= 200) over200.push(p);
// }
// log(...over200);
log(...filter(p => p.price >= 200, products));

log(filter(n => n %2, [1, 2, 3, 4]));

log(filter(n => n % 2, function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}()));