// hof = high-order function

function apply(operation, ...args) {
    // kita bisa menambahkan kode lain sebelum operation dijakankan.

    return operation(...args);
}

function sum(a, b, c) {
    return a + b + c;
}

function discount(disc, value) {
    return value - ((disc / 100) * value);
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log('Product price:', productPrice);
console.log('With discount 25%:', withDiscount);