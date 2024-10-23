function fibonacci(n) {
    if(n <= 1) return n;
    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(1));
console.log(fibonacci(10));
console.log(fibonacci(30));