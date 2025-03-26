# Penjelasan Function Generator di JavaScript

Kode berikut menunjukkan bagaimana menggunakan **function generator (`function*`)** di JavaScript untuk membuat iterable secara efisien.

```html
<script>
    function* createNames() {
        yield 'Eko';
        yield 'Kurniawan';
        yield 'Khannedy';
    }

    function* buatGanjil(value) {
        for (let i = 1; i <= value; i++) {
            if (i % 2 === 1) {
                yield i;
            }
        }
    }

    function* createNumbers() {
        let number = 1;
        while (true) {
            yield number;
            number++;
        }
    }

    function* createFibonacci() {
        let previous = 0;
        let current = 1;
        while (true) {
            yield current;
            let next = current + previous;
            previous = current;
            current = next;
        }
    }

    function* createCounter() {
        let count = 1;
        while (true) {
            yield count;
            count++;
        }
    }

    function* createFibonacciWithLimit(limit) {
        let previous = 0;
        let current = 1;
        let count = 0;
        while (count < limit) {
            yield current;
            let next = current + previous;
            previous = current;
            current = next;
            count++;
        }
    }

    const names = createNames();
    for (const name of names) {
        document.writeln(name + '<br>');
    }

    const numbers = buatGanjil(10);
    for (const number of numbers) {
        document.writeln(number + '<br>');
    }

    const fibonacci = createFibonacci();
    for (let i = 0; i < 10; i++) {
        document.writeln(fibonacci.next().value + '<br>');
    }

    const counter = createCounter();
    for (let i = 0; i < 10; i++) {
        document.writeln(counter.next().value + '<br>');
    }

    const fibonacciWithLimit = createFibonacciWithLimit(10);
    for (const number of fibonacciWithLimit) {
        document.writeln(number + '<br>');
    }
</script>
```

## Penjelasan

### Apa Itu Generator Function?

- Generator adalah fungsi yang bisa **pause (`yield`) dan resume (`next()`)** eksekusinya.
- Ditandai dengan `function*` dan menggunakan `yield` untuk mengembalikan nilai satu per satu.

### 1. Generator Sederhana: `createNames()`

```javascript
function* createNames() {
    yield 'Eko';
    yield 'Kurniawan';
    yield 'Khannedy';
}
```

- Menghasilkan elemen **satu per satu** saat di-loop.
- Penggunaannya:

```javascript
const names = createNames();
for (const name of names) {
    document.writeln(name + '<br>');
}
```

**Output:**
```
Eko
Kurniawan
Khannedy
```

### 2. Generator Bilangan Ganjil: `buatGanjil(value)`

```javascript
function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}
```

- Menghasilkan angka **ganjil** hingga nilai tertentu.
- Penggunaannya:

```javascript
const numbers = buatGanjil(10);
for (const number of numbers) {
    document.writeln(number + '<br>');
}
```

**Output:**
```
1
3
5
7
9
```

### 3. Generator Angka Tak Terbatas: `createNumbers()`

```javascript
function* createNumbers() {
    let number = 1;
    while (true) {
        yield number;
        number++;
    }
}
```

- **Loop tak terbatas** (`while (true)`) untuk menghasilkan angka tanpa henti.
- Harus dihentikan secara manual dengan `.next()`.

### 4. Generator Fibonacci: `createFibonacci()`

```javascript
function* createFibonacci() {
    let previous = 0;
    let current = 1;
    while (true) {
        yield current;
        let next = current + previous;
        previous = current;
        current = next;
    }
}
```

- Menghasilkan **angka Fibonacci** satu per satu.
- Penggunaan:

```javascript
const fibonacci = createFibonacci();
for (let i = 0; i < 10; i++) {
    document.writeln(fibonacci.next().value + '<br>');
}
```

**Output:**
```
1
1
2
3
5
8
13
21
34
55
```

### 5. Generator Fibonacci dengan Limit: `createFibonacciWithLimit(limit)`

```javascript
function* createFibonacciWithLimit(limit) {
    let previous = 0;
    let current = 1;
    let count = 0;
    while (count < limit) {
        yield current;
        let next = current + previous;
        previous = current;
        current = next;
        count++;
    }
}
```

- Sama dengan Fibonacci biasa, tapi dengan batas jumlah elemen.

### Kesimpulan

- **Generator** cocok untuk menghasilkan data **secara bertahap** tanpa langsung menyimpan semua nilai dalam memori.
- **Menggunakan `yield`** untuk mengembalikan nilai satu per satu.
- **Dapat digunakan dalam loop `for...of`** atau dengan `.next()`.
